import axios from 'axios';
import { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { Lien_back, Lien_front} from '../../API_CO/api';

const Fight = () =>{
    const {state} = useLocation();
    let [Pokemon1, setPokemon1] = useState({name:'', hp: 0});
    let [Pokemon2, setPokemon2] = useState({name:'', hp: 0});

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${state[0]}`)
        .then(res => {
      const name = res.data.name;
      const hp = res.data.stats[0].base_stat;
      Pokemon1 = {
        name: name,
        hp: hp
      }
      setPokemon1(Pokemon1);
    })
        .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${state[1]}`)
        .then(res => {
      const name = res.data.name;
      const hp = res.data.stats[0].base_stat;
      Pokemon2 = {
        name: name,
        hp: hp
      }
      setPokemon2(Pokemon2);
    })
        .catch(error => console.error(error));
    }, []);

    return(
        <>
        <div className="Fighters">
            <div className="Pokemon2">
                <img className='front' src={Lien_front(state[1])}/>
                <p className='name'> {Pokemon2.name} </p>
                <p className='hp'> {Pokemon2.hp} / {Pokemon2.hp} </p>
            </div>
            <div className="Pokemon1" >
                <img className='back' src={Lien_back(state[0])} />
                <p className='name'> {Pokemon1.name} </p>
                <p className='hp'> {Pokemon1.hp} / {Pokemon1.hp} </p>
            </div>
        </div>
        </>
    )
}

export default Fight;