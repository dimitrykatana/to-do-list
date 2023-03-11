import { useState } from 'react';
import Liste from './components/List_pokemon/List_pokemon';
import SearchBar from './components/header/Searchbar';
import Battle_scene from './components/battle_page/battle';
    
const App = (): JSX.Element => {
    const [filter, setFilter] = useState('');
    return (
    <div className="App">
    {/* <SearchBar onSearch={setFilter} />
    <Liste filtrage={filter} /> */}
       {/* <BattleSceneProvider> */}
      <Battle_scene />
    {/* </BattleSceneProvider> */}

    </div>
    )
}

export default App;