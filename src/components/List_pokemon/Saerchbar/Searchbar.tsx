import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Searchbar.css';

type Props = {
    onSearch: (inputValue: string) => void;
};

const SearchBar = (props : Props): JSX.Element => {
    const [inputValue, setInputValue] = useState('')
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      // permet d'éviter le rechargement de la page
      event.preventDefault();
    // call the onSearch prop to pass the inputValue to the parent component
    // On passe à ce props l'inputvalue du usestate que l'on a en haut
    props.onSearch(inputValue);

    };
  
    return (
      <>
        
        <Link to={'/Battle'}>
        TIME TO FIGHT
        </Link>
        <h1> Pokemon</h1>
        <form onSubmit={handleSubmit}>
          <label>
          </label>
          <input type="text" placeholder='Arceus' className='input'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          /><input type="submit" value="Srch"  className='button'/>
        </form>
      </>
    )
}

export default SearchBar;