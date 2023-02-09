import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './List_pokemon.css';
import Lien_image from '../API_CO/api';

type Props = {
    filtrage: string;
};

const Liste = (props : Props): JSX.Element => {
    const [list, setList] = useState<string[]>([]);
    
    //on garde cette liste pour le battle
    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/1/`)
      .then(res => {
        // list the names of all poke monsterzzz.
        console.log(res.data)
      })
      .catch(error => console.error(error));
    }, []);
    
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
    const filteredList = list.filter(item =>
        item.includes(props.filtrage.toLowerCase())
    );

    return(
      <ul className='PokemonZ'>
      {filteredList.map((item, index) => (
        <>
        <li className='PokemonCard' key={item}>
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