import React, { useState, useEffect } from 'react';
import SearchedRepositories from './SearchedRepositories';
import Preloader from '../../common/Preloader';

const SearchedRepositoriesContainer = ({ inputValue }) => {
  const [ repositories, setRepositories ] = useState([]);
  const [ isFetching, setIsFecthing ] = useState(false);

  const getRepositories = async () => {
    setIsFecthing(true);
    const response = await fetch(`https://api.github.com/search/repositories?q=${inputValue}`);
    const result = await response.json();
    setIsFecthing(false);
    setRepositories(result.items);
  }

  const addToSelected = async (repositoryToAdd) => {
    let repositories = JSON.parse(
      localStorage.getItem('repositories') || '[]'
    );
    
    repositories = repositories.filter(({ id }) => id !== repositoryToAdd.id);
    repositories.push(repositoryToAdd);
    localStorage.setItem('repositories', JSON.stringify(repositories));
  }

  useEffect(() => {
    getRepositories();
  }, [ inputValue ])

  if (isFetching) {
    return <Preloader />
  }

  return (
    <SearchedRepositories 
      repositories={repositories}
      addToSelected={addToSelected}
    />
  )
}

export default SearchedRepositoriesContainer
