import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

type BattleSceneContextType = {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  person: boolean;
  setPerson: Dispatch<SetStateAction<boolean>>;
};

export const BattleSceneContext = createContext<BattleSceneContextType>({
  index: 0,
  setIndex: () => {},
  person: true,
  setPerson: () => {},
});

export const useBattleSceneContext = (): BattleSceneContextType => useContext(BattleSceneContext);


type Props = {
  children: ReactNode;
};
export const BattleSceneProvider = ({ children }: Props): JSX.Element => {
  const [index, setIndex] = useState<number>(0);
  const [person, setPerson] = useState<boolean>(true);

  const value = {
    index,
    setIndex,
    person,
    setPerson,
  };

  return <BattleSceneContext.Provider value={value}>{children}</BattleSceneContext.Provider>;
};