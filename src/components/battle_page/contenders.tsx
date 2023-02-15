import axios from 'axios';
import { useState, useEffect } from 'react';
import { Lien_artwork } from '../API_CO/api';
import { useBattleSceneContext } from './context';

const Contenders = () =>{
    const { index, person } = useBattleSceneContext();
    const [numb1, setNumb1] = useState<number>(0);
    const [numb2, setNumb2] = useState<number>(0);
    const [Namez, setNamez] = useState<string[]>([]);
    useEffect(() => {
        if( person === true ){
            setNumb1(index);
        }
        
        if( person === false ){
            setNumb2(index);
        }
    }, [index
        //works fine without it but let just keep it
        //  ,person
        ]);
    useEffect( () => {
            axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50`)
            .then(res => {
                // list the names of all poke monsterzzz.
                const Namez = res.data.results.map((Namez : { name: string}) => Namez.name)
                // put them in the list
                setNamez(Namez);
            })
            .catch(error => console.error(error));
        }, [index, person]);

    return(
        <>
        <div className="contenders">
            <div className='ally'>
                <img  src={Lien_artwork(numb1)} />
                <p> {Namez[numb1]} </p>
            </div>
        
            <div className='ally'>
                <img  src={Lien_artwork(numb2)} />
                <p> {Namez[numb2]} </p>
            </div>
        </div>
        </>
    )
}

export default Contenders;