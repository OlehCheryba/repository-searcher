import React from 'react';
import InputFormContainer from './InputForm/InputFormContainer';
import styles from './InputSection.module.css';

const InputSection = () => {
  return (
    <section className={styles.section}>
      <span className={styles.infoText}>
        For search, type name of a repository and click Enter: 
      </span>
      <InputFormContainer />
    </section>
  )
}

export default InputSection
