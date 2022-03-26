import { useState, useEffect } from 'react'
import Values from 'values.js';
import './App.css'
import ColorForm from './ColorForm/ColorForm';
import ColorCard from './ColorCard/ColorCard';

function App() {
  const [ color, setColor ] = useState('#00FF70');
  const [ allColors, setAllColors ] = useState([]);
  const [ error, setError ] = useState(false);

  useEffect(() => {
    generateArrayOfColors(color);
  }, [color]);

  const generateArrayOfColors = base => {
    try {
      const result = new Values(base);
      const colors = result.all(10).map(item => item.hex);
      setAllColors(colors);
      setError(true)
    } catch {
      setError(false);
    }
  }

  const changeColor = newColor => {
    setColor(newColor);
  }

  return (
    <div className="App">
      <ColorForm changeColor={changeColor} />
      {!error ? <span className='error'>Incorrect color value. Try again.</span> : null}
      <h3 className='title'>Your colors</h3>
      <section className="section">
        {allColors && allColors.map(item => <ColorCard color={item} key={item} /> )}
      </section>
    </div>
  )
}

export default App;