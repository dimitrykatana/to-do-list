import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './List_pokemon.css';
import {Lien_image} from '../../API_CO/api';

type Props = {
    filtrage: string;
};

const Liste = (props : Props): JSX.Element => {
    const [list, setList] = useState<string[]>([]); 
    
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

    
  const pokemonCount = filteredList.length;
  const animationDelay = 0.2; // in seconds
  const transitionDuration = 0.8; // in seconds

  const liStyles: { opacity: number; transition: string; }[] | (React.CSSProperties | undefined)[] = [];

  for (let i = 0; i < pokemonCount; i++) {
    const delay = i * animationDelay;
    const style = {
      opacity: 1,
      transition: `opacity ${transitionDuration}s ease-in-out ${delay}s`,
    };
    if (i === 0) {
      style.opacity = 1;
    }
    liStyles.push(style);
  }

    return(
      <ul className='Pokemons'>
      {filteredList.map((item, index) => (
        <>
        <li className='PokemonCard' key={item} style={liStyles[index]}>
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