import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { Lien_artwork } from '../../API_CO/api';
import { BattleSceneContext } from '../context';

const Contenders = () =>{
    const { index, person } = useContext(BattleSceneContext);
    const [numb1, setNumb1] = useState<number>(0);
    const [numb2, setNumb2] = useState<number>(0);
    const [Namez, setNamez] = useState<string[]>([]);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50`)
        .then(res => {
            const Namez = res.data.results.map((Namez : { name: string}) => Namez.name)
            setNamez(Namez);
        })
        .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        person ? setNumb1(index) : setNumb2(index);  
    }, [index]);

    return(
        <>
        <div className="contenders">
            <div className={`ally ${person ? 'isActive' : 'isNot'}`} >
                <img  src={Lien_artwork(numb1)} />
                <p className='texte'> {Namez[numb1]} </p>
            </div>

            <div className={`ally ${!person ? 'isActive' : 'isNot'}`}>
                <img  src={Lien_artwork(numb2)} />
                <p className='texte'> {Namez[numb2]} </p>
            </div>
        </div>
        </>
    )
}

export default Contenders;