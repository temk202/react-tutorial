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

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <TextField variant='filled' value={text} onChange={(event) => {setText(event.target.value)}}/>
          <Button variant="outlined" onClick={addName}>Outlined</Button>
        </div>
        <ul>
          {names.map(item => <li>{item}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
