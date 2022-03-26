import { useState } from 'react';

import classes from './ColorForm.module.css';

const ColorForm = ({ changeColor }) => {

  const [ color, setColor ] = useState('');

  const inputChangeHandler = e => {
    const value = e.target.value;
    setColor(value);
  }

  const formSubmitHandler = e => {
    e.preventDefault();
    changeColor(color);
  }
  
  return (
    <form onSubmit={formSubmitHandler}>
      <input 
        type="text"
        value={color || ''}
        onChange={inputChangeHandler} />
      <button className={classes.button}>submit</button>
    </form>
  )
}

export default ColorForm