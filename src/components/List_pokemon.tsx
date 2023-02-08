import React, { useState, useEffect } from 'react';
import axios from 'axios';

// If there is a type void error, it means your function
// isn't returning anything and so you have to.
// When you create a jsx element use uppercase for the first letter
// if you don't react assume this is already an existing feature
// which is not our case
const Lien_image = (index : number) => {
    const lien = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`;
    return lien;
}

const Liste_pokemon = (): JSX.Element => {
    const [list, setList] = useState<string[]>([]);
    
    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20`)
      .then(res => {
        // list the names of all poke monsterzzz.
        const Les_pokemonz = res.data.results.map((pokemonz : { name: string}) => pokemonz.name)
        // put them in the list
        setList( Les_pokemonz)
      })
      .catch(error => console.error(error));
    }, []);

    return(
      <ol>
      {list.map((item, index) => (
        <li key={index}>{item}      
        <img src={Lien_image(index)} alt={`${item}`} />
        </li>
      ))}
      </ol>
    );
}

export default Liste_pokemon;