import React from 'react';
import RepositoryTable from '../../common/RepositoryTable/RepositoryTable';
import Preloader from '../../common/Preloader/Preloader';

const SearchedRepositories = ({ repositories, selectRepository, isFetching }) => {
  if (isFetching) {
    return <Preloader />
  }

  if (!repositories || !repositories.length) {
    return (
      <h2>
        No repositories are found with this name.
      </h2>
    )
  }

  const controls = (repository) => {
    if (repository.isSelected) {
      return 'Already in selected list'
    }

    return (
      <button
        onClick={async (e) => {
          e.persist();
          selectRepository(repository);
        }}
      >
        add to selected
      </button>
    )

  }

  return (
    <>
      <h2>
        Results of search:
      </h2>
      <RepositoryTable 
        repositories={repositories}
        controls={controls}
      />
    </>
  )
}

export default SearchedRepositories
