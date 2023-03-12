import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './List_pokemon.css';
import {Lien_image} from '../../API_CO/api';

type Props = {
    filtrage: string;
};

const Liste = (props : Props): JSX.Element => {
    const [list, setList] = useState<string[]>([]); 
    const [opacity, setOpacity] = useState(0);
    
    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      .then(res => {
        // list the names of all poke monsterzzz.
        const Les_pokemonz = res.data.results.map((pokemonz : { name: string}) => pokemonz.name)
        // put them in the list
        setList( Les_pokemonz)
      })
      .catch(error => console.error(error));
    }, []);
    const filteredList = list.filter(item =>
        item.includes(props.filtrage.toLowerCase())
    );

  const animationDelay = 0.2; // in seconds

    return(
      <ul className='Pokemons'>
      {filteredList.map((item, index) => (
        <>
        <li className='PokemonCard' key={item} onLoad={() => setOpacity(1)} style={{ opacity:opacity, transition: `opacity 1s ease-in ${index*animationDelay}s ` } }>
          <div className='HeadCard'>
            <p className='Nom'>{item}</p></div>
            <img className='image' src={Lien_image(list.indexOf(item))} alt={`${item}`} />
            <p className='Numero'>No. {list.indexOf(item)+1}</p>
        </li>
        </>
      ))}
      </ul>
    );
}

export default Liste;