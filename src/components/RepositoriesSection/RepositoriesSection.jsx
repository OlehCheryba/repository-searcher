import React from 'react';
import SearchedRepositoriesContainer from './SearchedRepositories/SearchedRepositoriesContainer';
import SelectedRepositoriesContainer from './SelectedRepositories/SelectedRepositoriesContainer';
import styles from './RepositoriesSection.module.css';

const RepositoriesSection = ({ isModeSearch }) => {
  return (
    <section className={styles.section}>
      {isModeSearch ? 
        <SearchedRepositoriesContainer /> : <SelectedRepositoriesContainer />
      }
    </section>
  )
}

export default RepositoriesSection
