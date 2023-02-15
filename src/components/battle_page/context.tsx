import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

// Define the shape of the context's value
type BattleSceneContextType = {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  person: boolean;
  setPerson: Dispatch<SetStateAction<boolean>>;
};

// This code creates a "context". The context holds two values called "index" and "person", and functions to change those values.
export const BattleSceneContext = createContext<BattleSceneContextType>({
  index: 0,
  setIndex: () => {},
  person: true,
  setPerson: () => {},
});


type Props = {
    children: ReactNode;
  };
// Create a provider component that wraps its children with the context's value
export const BattleSceneProvider = ({ children }: Props): JSX.Element => {
  // Define the state variables and their setters
  const [index, setIndex] = useState<number>(0);
  const [person, setPerson] = useState<boolean>(true);

  // Combine the state variables and their setters into the context's value
  const value = {
    index,
    setIndex,
    person,
    setPerson,
  };

//  Finally, it renders the child components that are passed to it inside the context, so that they can access the shared values and update them if needed.
  // Render the provider with its children and the context's value
  return <BattleSceneContext.Provider value={value}>{children}</BattleSceneContext.Provider>;
};