import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import Lien_image from '../API_CO/api';

type Props = {
    onChoice: Dispatch<SetStateAction<number>>;
    Personne: Dispatch<SetStateAction<boolean>>;
};

const Char_pick = (props : Props): JSX.Element => {
    const [list, setList] = useState<string[]>([]);

    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50`)
      .then(res => {
        // list the names of all poke monsterzzz.
        const Les_pokemonz = res.data.results.map((pokemonz : { name: string}) => pokemonz.name)
        // put them in the list
        setList( Les_pokemonz)
      })
      .catch(error => console.error(error));
    }, []);
    return(
        <>
    <ul className='PokemonZ'>
      {list.map((item, index) => (
        <li className='PokemonCard' key={index} onClick={() =>{
            props.onChoice(index)
        }
            }>
            <img className='image' src={Lien_image(list.indexOf(item))} alt={`${item}`}/>
        </li>
      ))}
<button onClick={() => {
    props.Personne(!props.Personne);
}}>Choose</button>

      </ul>
      </>

);
}

export default Char_pick;