import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Lien_image } from '../../API_CO/api';
import { BattleSceneContext} from '../context';

const Char_pick = (): JSX.Element => {
    const { setIndex, setPerson } = useContext(BattleSceneContext);
    const [list, setList] = useState<string[]>([]);
    
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50`)
        .then(res => {
            // list the names of all poke monsterzzz.
            const Les_pokemonz = res.data.results.map((pokemonz : { name: string}) => pokemonz.name)
            // put them in the list
            setList(Les_pokemonz)
        })
        .catch(error => console.error(error));
    }, []);
    return(
        <>    
        <button className='bouton' onClick={() => {
            setPerson(prevState => !prevState);
        }}>
        SWITCH
        </button>
        <ul className='PokemonZ'>
            {list.map((item, index) => (
            <li className='PokemonCard' key={index} onClick={() =>{
                setIndex(index)
            }}>
            <img className='image' src={Lien_image(list.indexOf(item))} alt={`${item}`}/>
            </li>
            ))}

        <button className='FIGHT'>
            FIGHT
        </button>
        </ul>
        </>   
    );
}
export default Char_pick;