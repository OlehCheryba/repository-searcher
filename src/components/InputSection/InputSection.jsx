import React from 'react';

const InputSection = ({ inputValue, setInputValue }) => {
  const handleChange = event => {
    setInputValue(event.target.value);
  }

  return (
    <section>
      <b>
        For search, enter name of a repository: 
      </b>
      <input 
        value={inputValue}
        onChange={handleChange}
        placeholder='Name of a repository'
      />
      <hr />
    </section>
  )
}

export default InputSection
