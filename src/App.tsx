import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Liste from './components/List_pokemon/List_pokemon';
import SearchBar from './components/header/Searchbar';
import Battle_scene from './components/battle_page/battle';
import Fight from './components/battle_page/Battle_scene/battle_scene';
    
const App = (): JSX.Element => {
    const [filter, setFilter] = useState('');
    return (
    <div className="App">
    {/* <SearchBar onSearch={setFilter} />
    <Liste filtrage={filter} /> */}
       {/* <BattleSceneProvider> */}
      {/* <Battle_scene /> */}
      
    <Router>
      <Routes>
        <Route path="/" Component={Battle_scene} />
        <Route path="/fight" Component={Fight} />
      </Routes>
    </Router>
    {/* </BattleSceneProvider> */}

    </div>
    )
}

export default App;