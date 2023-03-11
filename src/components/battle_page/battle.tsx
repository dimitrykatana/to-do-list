import Char_pick from './pick/pick';
import Contenders from './Contenders/contenders';
import Fight from './Battle_scene/battle_scene';
import { BattleSceneProvider } from './context';

const Battle_scene = (): JSX.Element => {
    return(
      <>
       <BattleSceneProvider>
      <Contenders/>
      <Char_pick/>
      <Fight/>
      </BattleSceneProvider>
      </>
    );
}

export default Battle_scene;