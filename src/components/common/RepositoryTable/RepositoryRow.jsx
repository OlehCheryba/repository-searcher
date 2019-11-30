import React from 'react';

const RepositoryRow = ({ repository, controls }) => {
  return (
    <tr>
      <td>{repository.name}</td>
      <td>{repository.owner.login}</td>
      <td>{repository.score}</td>
      <td>{controls(repository)}</td>
    </tr>
  )
}

export default RepositoryRow
