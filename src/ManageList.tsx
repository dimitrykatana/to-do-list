import React, { useState, useEffect } from 'react';
import ManageList from './ManageList';

const Form = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('')
  
  const [list, setList] = useState<string[]>([]);
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setList([...list, inputValue]);
    setInputValue('');
  };
  const handleDelete = (index: number) => {
    let newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }
  
  
  return (
    <>
    <h1> To do list</h1>
    <form onSubmit={handleSubmit}>
    <label>Enter your name:
    <input type="text" 
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}/>
    </label>
    <input type="submit" />
    <p> You typed : {inputValue} </p>
    </form>
    
    <ol>
    {list.map((item, index) => (
      <li key={index}>{item} <button onClick={()=> handleDelete(index)} >delete</button></li>
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