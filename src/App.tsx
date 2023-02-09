import { useState } from 'react';
import Liste_pokemon from './components/List_pokemon/List_pokemon';
import SearchBar from './components/header/Searchbar';
    
const List = (): JSX.Element => {
    const [filter, setFilter] = useState('');
    return (
    <div className="App">
    <SearchBar onSearch={setFilter} />
    <Liste_pokemon filtrage={filter} />
    </div>
    )
}

export default List;