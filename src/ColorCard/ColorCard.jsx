import { useState } from 'react';
import classes from './ColorCard.module.css';

const ColorCard = ({ color }) => {

  const [ copied, setCopied ] = useState(false);

  const copyToClipboard = e => {
    navigator.clipboard.writeText(`#${color}`);
  }
  
  return (
    <div className={classes.card} onClick={copyToClipboard}>
      <p className={classes.colorParagraph}>{`#${color}`}</p>
      <div 
        style={{backgroundColor: `#${color}`}}
        className={classes.colorContainer}>
        <span className={`${classes.copy} ${copied ? classes.showCopy : ''}`}>Copied to clipboard</span>
      </div>
    </div>
  )
}

export default ColorCard;