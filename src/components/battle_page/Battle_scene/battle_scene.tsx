import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Lien_artwork, Lien_back, Lien_front, Pokemon } from '../../API_CO/api';

const Fight = () =>{
    const {state} = useLocation();
    // console.log(`https://pokeapi.co/api/v2/pokemon/${state[0]}/sprites`)    
    console.log(`https://pokeapi.co/api/v2/pokemon/${state[0]}/name`)   
    Pokemon(state[0]) 


    return(
        <>
        <h1>HELLO</h1>
        <div className="contenders">
            <div className="left" >
                <p className='texte'> {state[0]} </p>
                <img src={Lien_back(state[0])} />
            </div>

            <div className="right">
                <img src={Lien_front(state[1])}/>
                <p className='texte'> {state[1]} </p>
            </div>
        </div>
        </>
    )
}

export default Fight;