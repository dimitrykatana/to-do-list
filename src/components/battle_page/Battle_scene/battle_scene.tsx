import axios from 'axios';
import { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { Lien_back, Lien_front} from '../../API_CO/api';
import { Howl } from 'howler';


const Fight = () =>{
    const {state} = useLocation();
    let [Pokemon1, setPokemon1] = useState({name:'', hp: 0});
    let [Pokemon2, setPokemon2] = useState({name:'', hp: 0});
    let sound = new Howl({
        src: ['Pallet.mp3']
    })
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
        <div className="Fighters" 
        // onLoad={() => sound.play()}
        >
            <div className="Pokemon2">
                <img className='front' src={Lien_front(state[1])}/>

                <div className='info'>
                <p className='name'> {Pokemon2.name} </p>
                <p className='level'> Lv.5 </p>
                <div className="hp-bar">
                    <progress value="100" max="100"></progress>
                    <p className='hp'> {Pokemon2.hp} / {Pokemon2.hp} </p>
                </div>

                </div>
            </div>
            <div className="Pokemon1" >
                <img className='back' src={Lien_back(state[0])} />

                <div className='info'>
                <p className='name'> {Pokemon1.name} </p>
                <p className='level'> Lv.5 </p>
                <div className="hp-bar">
                    <progress value="100" max="100"></progress>
                    <p className='hp'> {Pokemon1.hp} / {Pokemon1.hp} </p>
                </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default Fight;