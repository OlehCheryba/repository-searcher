import React from 'react';
import styles from './Preloader.module.css';

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <img 
        src='/img/loading-image.svg'
        alt='loading'
      />
      <p>
        Loading...
      </p>
    </div>
  )
}

export default Preloader