import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

// Define the shape of the context's value
type BattleSceneContextType = {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  person: boolean;
  setPerson: Dispatch<SetStateAction<boolean>>;
};
// The first thing this code does is create a "context", which is like a big container that holds some values that can be shared across multiple components. In this case, the context holds two values called "index" and "person", and some functions that can be used to change those values.

// Create the context with an initial value
export const BattleSceneContext = createContext<BattleSceneContextType>({
  index: 0,
  setIndex: () => {},
  person: true,
  setPerson: () => {},
});

// The "BattleSceneProvider" component is a way to wrap other components with the context so that they can access the shared values. It uses some special functions from React called "useState" to create the initial values for "index" and "person", and then puts those values into the big container along with the functions to change them.
// Define the props for the context provider
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