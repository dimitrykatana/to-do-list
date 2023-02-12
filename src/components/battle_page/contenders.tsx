import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Lien_image } from '../API_CO/api';
import { Lien_artwork } from '../API_CO/api';
type Props = {
    picked: number;
    personne: boolean;
};

const Contenders = (props : Props) =>{
    const [numb1, setNumb1] = useState<number>(0);
    const [numb2, setNumb2] = useState<number>(0);
    const [Namez, setNamez] = useState<string[]>([]);
    useEffect(() => {
        if(props.personne === true ){
            setNumb1(props.picked);
        }
        
        if(props.personne === false ){
            setNumb2(props.picked);
        }
    }, [props.picked
        //works fine without it but let just keep it
        //  ,props.personne
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
        }, [props.picked, props.personne]);

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