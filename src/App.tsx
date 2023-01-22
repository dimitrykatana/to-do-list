import React, { useState, useEffect } from 'react';
import './App.css'

function Form(): JSX.Element {
  const [inputValue, setInputValue] = useState('')
  
  const [list, setList] = useState<String[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // setList(list.concat([inputValue])) is the same as what is in the next line
      setList([...list, inputValue]);
      // It take the values of the list and add inputvalue on top of it each time you 
      // cclick on submit
      // line 17 helps to put the input value to an emplty character
      setInputValue('');
  };

  const handleDelete = (index: number) => {
//  using index as a key can cause unexpected behavior especially if the list order changes
// or items are added or removed. It's a good practice to use the unique value of each item
//as the key, like a unique ID if your data has one.
//  I need to have a copy of the array wich is untouched
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
  const [count, setCount] = useState<number>(0)

  useEffect(() =>{
    console.log("resr")
  }, [count] )
  
  return (
    <div className="App">

      <Form/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App