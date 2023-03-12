import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Liste from './List/List_pokemon';
import SearchBar from './Saerchbar/Searchbar';
import './List/List_pokemon.css';
import './Saerchbar/Searchbar.css';

    
const Listez = (): JSX.Element => {
    const [filter, setFilter] = useState('');
    return (
    <>
    <SearchBar onSearch={setFilter} />
    <Liste filtrage={filter} />
    </>
    )
}

export default Listez;