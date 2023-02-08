import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Form = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('')
  const [list, setList] = useState<string[]>([]);
  
  
useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/generation/1/`)
    .then(res => {
      const Les_pokemonz = res.data.pokemon_species.map((pokemonz : { name: string}) => pokemonz.name)
      setList( Les_pokemonz)
    })
  
    .catch(error => console.error(error));
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // permet d'éviter le rechargement de la page
    event.preventDefault();
    // Ajoute le inputvalue à la liste, donc ce qui est tapé dans le formulaire est dans liste
    setList([...list, inputValue]);
    // on réinitialise la valeur de inputvalue, donc on revide le formmulaire
    setInputValue('');
  };
  
  return (
    <>
    <h1> To do list</h1>
    <form onSubmit={handleSubmit}>
    <label>type the number of the pokemon:
    <input type="text" 
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}/>
    </label>
    <input type="submit" />
    <p> You typed : {inputValue} </p>
    </form>
    
    <ol>
    {list.map((item, index) => (
      <li key={index}>{item}</li>
      ))}
      </ol>
      </>
      )
    }
    
function App(): JSX.Element {
    return (
    <div className="App">
    <Form/>
        
    </div>
    )
}
      
export default App