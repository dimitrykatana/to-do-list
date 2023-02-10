import { useState } from 'react';
import Char_pick from './pick';
import Contenders from './contenders';


const Battle_scene = (): JSX.Element => {
  const [getIndex, setIndex] = useState<number>(0);
  const [person, setPerson] = useState<boolean>(true);
    return(
      <>
      <Contenders picked={getIndex} personne={person}/>
      <Char_pick onChoice={setIndex} Personne={setPerson}/>
      </>
    );
}

export default Battle_scene;