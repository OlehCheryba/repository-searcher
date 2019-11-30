import React from 'react';
import SelectedRepositories from './SelectedRepositories';
import { connect } from 'react-redux';
import { deleteRepositoryFromSelected } from './../../../redux/reducers/repositories-reducer';

const SelectedRepositoriesContainer = (props) => {
  return (
    <SelectedRepositories
      {...props}
    />
  )
}

const mapStateToProps = (state) => ({
  repositories: state.repositories.selectedRepositories
});

export default connect(
  mapStateToProps,
  { deleteRepositoryFromSelected }
)(SelectedRepositoriesContainer);
