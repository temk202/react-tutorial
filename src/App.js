import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function App() {

  const [names, setNames] = useState([]);
  const [text, setText] = useState("");

  const addName = () => {
    const nemsenArray = names.concat(text)
    setNames(nemsenArray)
  }
  
  const removeName = (i) => {
   var array = [...names]
   array.splice(i, 1)
   setNames(array)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <TextField variant='filled' value={text} onChange={(event) => {setText(event.target.value)}}/>
          <Button variant="outlined" onClick={addName}>Outlined</Button>
        </div>
        <ul>
          {names.map((item, i) => (
          <div className='row'>
            <li style={{"marginRight": "10px"}}>
              {item}
            </li>
            <Button variant="outlined" onClick={() => {removeName(i)}}>Remove</Button>
          </div>))}
        </ul>
      </header>
    </div>
  );
}

export default App;
