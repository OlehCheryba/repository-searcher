import React from 'react';
import RepositoryTable from '../../common/RepositoryTable/RepositoryTable';

const SelectedRepositories = ({ repositories, deleteRepositoryFromSelected }) => {
  if (!repositories || !repositories.length) {
    return (
      <h2>
        You don't have selected repositories.
      </h2>
    )
  }

  const controls = (repository) => (
    <button
      onClick={async (e) => {
        e.persist();
        deleteRepositoryFromSelected(repository.id);
      }}
    >
      delete from selected
    </button>
  )

  return (
    <>
      <h2>
        Your's selected repositories:
      </h2>
      <RepositoryTable 
        repositories={repositories}
        controls={controls}
      />
    </>
  )
}

export default SelectedRepositories
