import { useState } from 'react'
import './App.css'
import ColorForm from './ColorForm/ColorForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ColorForm />
    </div>
  )
}

export default App
