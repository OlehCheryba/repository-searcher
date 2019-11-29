import React from 'react';
import RepositoryRow from './RepositoryRow';

const RepositoryTable = ({ repositories, controlButton }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name of repository</th>
          <th>Owner's login</th>
          <th>Score</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {repositories.map(repository => (
          <RepositoryRow 
            repository={repository}
            key={repository.id}
            controlButton={controlButton}
          />
        ))}
      </tbody>
    </table>
  )
}

export default RepositoryTable
