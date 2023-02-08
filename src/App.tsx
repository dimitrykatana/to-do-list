import { useState } from 'react';
import Liste_pokemon from './components/List_pokemon';
import SearchBar from './components/Searchbar';
    
function App(): JSX.Element {
    const [filter, setFilter] = useState('');
    return (
    <div className="App">
    <SearchBar onSearch={setFilter} />
    <Liste_pokemon filtrage={filter} />
    </div>
    )
}

export default App;