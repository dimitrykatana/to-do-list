import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { BattleSceneContext } from '../context';

const Fight = () =>{
    const { index } = useContext(BattleSceneContext);
    const [numb1, setNumb1] = useState<number>(0);
    const [numb2, setNumb2] = useState<number>(0);
    const [Namez, setNamez] = useState<string[]>([]);

    
    return(
        <>
        <div className="contenders">
            <div className="left" >
                {/* <img src={(numb1)} /> */}
                <p className='texte'> {Namez[numb1]} </p>
            </div>

            <div className="right">
                {/* <img  src={(numb2)} /> */}
                <p className='texte'> {Namez[numb2]} </p>
            </div>
        </div>
        </>
    )
}

export default Fight;