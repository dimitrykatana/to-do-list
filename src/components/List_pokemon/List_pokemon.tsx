import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './List_pokemon.css';
type Props = {
    filtrage: string;
};

const Lien_image = (index : number) => {
    const lien = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`;
    return lien;
}

const Liste_pokemon = (props : Props): JSX.Element => {
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
    const filteredList = list.filter(item =>
        item.includes(props.filtrage.toLowerCase())
    );

    return(
      <ol className='PokemonZ'>
      {filteredList.map((item, index) => (
        <>
        <li className='PokemonCard' key={index}>
          <div className='HeadCard'>
            <p className='Nom'>{item}</p></div>
            <img className='image' src={Lien_image(list.indexOf(item))} alt={`${item}`} />
            <p className='Numero'>No. {list.indexOf(item)}</p>
        </li>
        </>
      ))}
      </ol>
    );
}

export default Liste_pokemon;