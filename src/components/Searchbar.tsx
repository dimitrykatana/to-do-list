import React, { useState, useEffect } from 'react';

type Props = {
    onSearch: (inputValue: string) => void;
};

const SearchBar = (props : Props): JSX.Element => {
    const [inputValue, setInputValue] = useState('')
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      // permet d'éviter le rechargement de la page
      event.preventDefault();
    console.log(props.onSearch)
    // call the onSearch prop to pass the inputValue to the parent component
    // On passe à ce props l'inputvalue du usestate que l'on a en haut
    props.onSearch(inputValue);

    };
  
    return (
      <>
        <h1> Pokemonz</h1>
        <form onSubmit={handleSubmit}>
          <label>Filter : 
          </label>
          <input type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          />
          <input type="submit" />
        </form>
      </>
    )
}

export default SearchBar;