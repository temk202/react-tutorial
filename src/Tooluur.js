import './Tooluur.css';
import './App.css';
import { useState } from "react";
import Button from '@mui/material/Button';


function App() {
  const [input, setInput] = useState("")
  const [names, setNames] = useState([])

  const addNames =()=>{
   var array = [...names]
   array.push(input)
   setNames(array)

   console.log(array)
  }
  const removeNames = (idx) => {
    var array = [...names]
    array.splice(idx, 1)
    setNames(array)
  }
  const handleChange = (event) => {
    setInput(event.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        {input}
        <div className='class1'>
          <input
          value={input}
          onChange={(event)=> { setInput(event.target.value) }} />
          <Button variant="outlined" onClick={addNames}>button</Button>
        </div>
        <ul>
          
          {names.map((item, idx) =>  (
            <div className="class2">
              <li onClick={ () => { hansad() } }>{item}</li>
              <li onClick={ () => { removeNames(i) } }></li>
              <li onClick={removeNames(i)}></li>
               <button variant="outlined" onClick={() => { removeNames(idx) }}>Remove</button>
            </div>
          ))}
         
        </ul>

    </header>
    </div>
  );
}

export default App;
