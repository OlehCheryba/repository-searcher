import React from 'react';
import styles from './InputForm.module.css';

const InputForm = ({ handleSubmit, inputValue, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        className={styles.input}
        type='text'
        placeholder='Name of a repository'
        value={inputValue}
        onChange={handleChange}
        required
      />
      <input
        className={styles.submitButton}
        type='submit'
        value='Search!'
      />
    </form>
  )
}

export default InputForm