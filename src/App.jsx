import { useState, useEffect } from 'react'
import './App.css'
import ColorForm from './ColorForm/ColorForm';

function App() {
  const [color, setColor] = useState('#00FF70');

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
      <section className="section">
        <h3 className='title'>Your colors</h3>
      </section>
    </div>
  )
}

export default App
