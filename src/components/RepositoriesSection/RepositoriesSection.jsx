import React from 'react';
import SearchedRepositoriesContainer from './SearchedRepositories/SearchedRepositoriesContainer';
import SelectedRepositoriesContainer from './SelectedRepositories/SelectedRepositoriesContainer';

const RepositoriesSection = ({ inputValue }) => {
  const searchMode = inputValue !== '';

  if (searchMode) {
    return (
      <SearchedRepositoriesContainer 
        inputValue={inputValue}
      />
    )
  }

  return (
    <SelectedRepositoriesContainer />
  )
}

export default RepositoriesSection
