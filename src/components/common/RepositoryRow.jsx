import React from 'react';

const RepositoryRow = ({ repository, controlButton }) => {
  return (
    <tr>
      <td>{repository.name}</td>
      <td>{repository.owner.login}</td>
      <td>{repository.score}</td>
      <td>{controlButton(repository)}</td>
    </tr>
  )
}

export default RepositoryRow
