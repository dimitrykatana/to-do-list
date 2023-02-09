import React, { useState, useEffect } from 'react';
import Lien_image from '../API_CO/api';

type Props = {
    picked: number;
    personne: boolean;
};

const Ally = (props : Props) =>{
    let numb = [0,0];

    if(props.personne === true ){
        numb[0] = props.picked
    }
    
    if(props.personne === false ){
        numb[1] = props.picked
    }

    console.log(numb);
    return(
        <>
        <img className='image' src={Lien_image(numb[0])} />
        <img className='image' src={Lien_image(numb[1])} />
        </>
    )
}

export default Ally;