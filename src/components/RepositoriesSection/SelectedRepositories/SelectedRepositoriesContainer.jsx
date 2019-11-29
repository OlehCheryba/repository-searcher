import React from 'react';
import SelectedRepositories from './SelectedRepositories';

const SelectedRepositoriesContainer = () => {
  const repositories = JSON.parse(
    localStorage.getItem('repositories') || '[]'
  );

  const deleteFromSelected = async (repositoryToDelete) => {
    let repositories = JSON.parse(
      localStorage.getItem('repositories') || '[]'
    );
    
    repositories = repositories.filter(({ id }) => id !== repositoryToDelete.id);
    localStorage.setItem('repositories', JSON.stringify(repositories));
  }

  return (
    <SelectedRepositories
      repositories={repositories}
      deleteFromSelected={deleteFromSelected}
    />
  )
}

export default SelectedRepositoriesContainer
