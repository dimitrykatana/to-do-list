import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Battle_scene from './components/battle_page/battle';
import Fight from './components/battle_page/Battle_scene/battle_scene';
import Listez from "./components/List_pokemon/List";
    
const App = (): JSX.Element => {
    const [filter, setFilter] = useState('');
    return (
    <>
    {/* <SearchBar onSearch={setFilter} />
    <Liste filtrage={filter} /> */}
      
    <Router>
      <Routes>
        <Route path="/" Component={Listez} />
        <Route path="/Battle" Component={Battle_scene} />
        <Route path="/fight" Component={Fight} />
      </Routes>
    </Router>
    </>
    )
}

export default App;