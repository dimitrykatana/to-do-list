import Liste_pokemon from './components/List_pokemon';
import SearchBar from './components/Searchbar';
    
function App(): JSX.Element {
    return (
    <div className="App">
    <SearchBar/>
    <Liste_pokemon/>
    </div>
    )
}

export default App;