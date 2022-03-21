import { useState, useEffect } from 'react'
import './App.css'
import ColorForm from './ColorForm/ColorForm';

function App() {
  const [color, setColor] = useState('');

  useEffect(() => {
    console.log(color);
  }, [color]);

  const generateArrayOfColors = base => {
    
  }

  const changeColor = newColor => {
    setColor(newColor);
  }

  return (
    <div className="App">
      <ColorForm changeColor={changeColor} />
    </div>
  )
}

export default App
