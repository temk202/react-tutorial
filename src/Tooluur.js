import './App.css';
import { useState } from "react";
import Button from '@mui/material/Button';


function App() {
  const [number, setNumber] =useState(0)

  const changeNumber = (temka) => {
    console.log(temka)

    if(temka === "nemeh") {
        setNumber(number+1)
    } else if(temka === "hasah") {
        setNumber(number - 1)
    } else if(temka === "urjih") {
        setNumber(number * 2)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        {number}
        <Button onClick={() => { changeNumber("nemeh") }}>Нэмэх</Button>
        <Button onClick={() => { changeNumber("hasah") }}>Hasah</Button>
        <Button onClick={() => { changeNumber("urjih") }}>Urjih</Button>

    </header>
    </div>
  );
}

export default App;
