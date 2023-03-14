import { BrowserRouter, Routes, Route } from "react-router-dom";
import Battle_scene from './components/battle_page/battle';
import Fight from './components/battle_page/Battle_scene/battle_scene';
import Listez from "./components/List_pokemon/List";
    
const App = (): JSX.Element => {
    return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Listez} />
        <Route path="/battle" Component={Battle_scene} />
        <Route path="/fight" Component={Fight} />
      </Routes>
    </BrowserRouter>
    </>
    )
}

export default App;