import React, { useState } from 'react';
import App from './App';

const AppContainer = () => {
  const [ inputValue, setInputValue ] = useState('');

  return (
    <App 
      inputValue={inputValue}
      setInputValue={setInputValue}
    />
  )
}

export default AppContainer
