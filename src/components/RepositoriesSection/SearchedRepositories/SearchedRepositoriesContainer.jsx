import React from 'react';
import SearchedRepositories from './SearchedRepositories';
import { connect } from 'react-redux';
import { selectRepository } from '../../../redux/reducers/repositories-reducer';

const fillIsSelected = (searchedRepositories, selectedRepositories) => {
  return searchedRepositories.map((repository) => {
    repository.isSelected = Boolean(
      selectedRepositories.find(
        (seletedRepository) => seletedRepository.id === repository.id
      )
    );

    return repository;
  });
}

const SearchedRepositoriesContainer = ({ 
  selectedRepositories, searchedRepositories, ...props 
}) => {
  const repositories = fillIsSelected(searchedRepositories, selectedRepositories);

  return (
    <SearchedRepositories 
      repositories={repositories}
      {...props}
    />
  )
}

const mapStateToProps = (state) => ({
  selectedRepositories: state.repositories.selectedRepositories,
  searchedRepositories: state.repositories.searchedRepositories,
  isFetching: state.repositories.isFetching
});

export default connect(
  mapStateToProps,
  { selectRepository }
)(SearchedRepositoriesContainer);
