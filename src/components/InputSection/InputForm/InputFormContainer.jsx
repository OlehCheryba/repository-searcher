import React, { useState } from 'react';
import { connect } from 'react-redux';
import InputForm from './InputForm';
import { searchRepositories } from '../../../redux/reducers/repositories-reducer';
import { enableSearchMode } from '../../../redux/reducers/app-reducer';

const InputFormContainer = ({ searchRepositories, enableSearchMode }) => {
  const [ inputValue, setInputValue ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    enableSearchMode();
    searchRepositories(inputValue);
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <InputForm 
      handleSubmit={handleSubmit}
      inputValue={inputValue}
      handleChange={handleChange}
    />
  )
}

export default connect(
  null,
  { searchRepositories, enableSearchMode }
)(InputFormContainer);