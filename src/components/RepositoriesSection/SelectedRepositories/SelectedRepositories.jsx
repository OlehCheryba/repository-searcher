import React from 'react';
import RepositoryTable from '../../common/RepositoryTable';

const SelectedRepositories = ({ repositories, deleteFromSelected }) => {
  if (!repositories.length) {
    return (
      <p>
        You don't have selected repositories.
      </p>
    )
  }

  return (
    <>
      <h3>
        Your's selected repositories:
      </h3>
      <RepositoryTable 
        repositories={repositories}
        controlButton={(repository) => (
          <button
            onClick={async (e) => {
              e.persist();
              await deleteFromSelected(repository);
              e.target.innerText = 'delete succesfully';
            }}
          >
            delete from selected
          </button>
        )}
      />
    </>
  )
}

export default SelectedRepositories
