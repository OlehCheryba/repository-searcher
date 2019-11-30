import React from 'react';
import RepositoryRow from './RepositoryRow';
import styles from './RepositoryTable.module.css';

const RepositoryTable = ({ repositories, controls }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th>Name of repository</th>
          <th>Owner's login</th>
          <th>Score</th>
          <th>Controls</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {repositories.map(repository => (
          <RepositoryRow 
            repository={repository}
            key={repository.id}
            controls={controls}
          />
        ))}
      </tbody>
    </table>
  )
}

export default RepositoryTable
