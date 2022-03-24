import classes from './ColorCard.module.css';

const ColorCard = ({ color }) => {

  const copyToClipboard = e => {
    navigator.clipboard.writeText(`#${color}`);
  }
  
  return (
    <div className={classes.card} onClick={copyToClipboard}>
      <p className={classes.colorParagraph}>{`#${color}`}</p>
      <div 
        style={{backgroundColor: `#${color}`}}
        className={classes.colorContainer}>
      </div>
    </div>
  )
}

export default ColorCard;