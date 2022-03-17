import { useState } from 'react'
import './App.css'
import ColorForm from './ColorForm/ColorForm';

function App() {
  const [color, setColor] = useState('');

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
