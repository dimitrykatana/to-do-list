import React, { useState, useEffect } from 'react';
import Lien_image from '../API_CO/api';

type Props = {
    picked: number;
    personne: boolean;
};

const Ally = (props : Props) =>{
    const [numb1, setNumb1] = useState<number>(0);
    const [numb2, setNumb2] = useState<number>(0);

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

    return(
        <>
        <div className="contenders">
        <img className='ally' src={Lien_image(numb1)} />
        <img className='ally' src={Lien_image(numb2)} />
        </div>
        </>
    )
}


export default Ally;