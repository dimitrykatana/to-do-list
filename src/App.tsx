import { useState } from 'react';
import Liste_pokemon from './components/List_pokemon';
import SearchBar from './components/Searchbar';
    
function App(): JSX.Element {
    const [filter, setFilter] = useState('');
    return (
    <div className="App">
    <SearchBar onSubmit={setFilter} />
    <Liste_pokemon filter={filter} />
    </div>
    )
}

export default App;