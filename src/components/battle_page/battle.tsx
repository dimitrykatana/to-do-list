import Char_pick from './pick';
import Contenders from './contenders';
import { BattleSceneProvider } from './context';

const Battle_scene = (): JSX.Element => {
    return(
       <BattleSceneProvider>
      <Contenders/>
      <Char_pick/>
      </BattleSceneProvider>
    );
}

export default Battle_scene;