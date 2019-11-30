import React, { useEffect } from 'react';
import RepositoriesSection from './RepositoriesSection';
import { connect } from 'react-redux';
import { requestSelectedRepositories } from './../../redux/reducers/repositories-reducer';

const RepositoriesSectionContainer = ({ requestSelectedRepositories, ...props }) => {
  useEffect(() => {
    requestSelectedRepositories();
  });

  return (
    <RepositoriesSection 
      {...props}
    />
  )
}

const mapStateToprops = (state) => ({
  isModeSearch: state.app.isModeSearch
});

export default connect(
  mapStateToprops,
  { requestSelectedRepositories }
)(RepositoriesSectionContainer);
