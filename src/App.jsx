import { useState } from 'react'
import './App.css'
import ColorForm from './ColorForm/ColorForm';

function App() {
  const [color, setColor] = useState('');

  const submitColorHandler = e => {
    
  }

  return (
    <div className="App">
      <ColorForm />
    </div>
  )
}

export default App
