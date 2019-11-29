import React from 'react';
import InputSection from './components/InputSection/InputSection';
import RepositoriesSection from './components/RepositoriesSection/RepositoriesSection';

const App = ({ inputValue, setInputValue }) => {
  return (
    <>
      <InputSection 
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <RepositoriesSection
        inputValue={inputValue}
      />
    </>
  )
}

export default App
