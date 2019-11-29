import React from 'react';
import RepositoryTable from '../../common/RepositoryTable';

const SearchedRepositories = ({ repositories, addToSelected }) => {
  if (!repositories || !repositories.length) {
    return (
      <p>
        No repositories are found with this name.
      </p>
    )
  }

  return (
    <>
      <h3>
        Results of search:
      </h3>
      <RepositoryTable 
        repositories={repositories}
        controlButton={(repository) => (
          <button
            onClick={async (e) => {
              e.persist();
              await addToSelected(repository);
              e.target.innerText = 'added succesfully';
            }}
          >
            add to selected
          </button>
        )}
      />
    </>
  )
}

export default SearchedRepositories
