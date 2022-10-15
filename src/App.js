import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function App() {

  const [names, setNames] = useState([]);
  const [text, setText] = useState("");
  const [age, setAge] = useState("");

  const addName = () => {
    const nemsenArray = names.concat({name: text, age: age})
    setNames(nemsenArray)
    console.log(nemsenArray)
  }

  
  const removeName = (i) => {
   var array = [...names]
   array.splice(i, 1)
   setNames(array)
  }
  const handleNameChange = (event) => {
    setText(event.target.value)
  }
  const handleAgeChange = (event) => {
    setAge(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='row'>
          <div className='col' style={{"marginRight": "20px"}}>
            <TextField variant='filled' label="Name" value={text} onChange={handleNameChange}/>
            <TextField variant='filled' label="Age" value={age} onChange={handleAgeChange}/>
          </div>
          <Button variant="outlined" onClick={addName}>Нэмэх</Button>
        </div>
        <ul>
          {names.map((item, i) => (
          <div className='row'>
            <li>
              {item.name + " "+ item.age}
            </li>
            <Button variant="outlined" onClick={() => {removeName(i)}}>Remove</Button>
          </div>))}
        </ul>
      </header>
    </div>
  );
}

export default App;
