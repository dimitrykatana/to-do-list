import React, { useState, useEffect } from 'react';

const SearchBar = (): JSX.Element => {
    const [inputValue, setInputValue] = useState('')
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      // permet d'éviter le rechargement de la page
      event.preventDefault();
    };

    return (
      <>
        <h1> To do list</h1>
        <form onSubmit={handleSubmit}>
          <label>type the number of the pokemon: 
          </label>
          <input type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}/>
          <input type="submit" />
        </form>
      </>
    )
  }
export default SearchBar;