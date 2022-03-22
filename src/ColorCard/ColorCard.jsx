import classes from './ColorCard.module.css';

const ColorCard = ({ color }) => {
  return (
    <>
      <p className={classes.colorParagraph}>{`#${color}`}</p>
      <div 
        style={{backgroundColor: `#${color}`}}
        className={classes.colorContainer}>
      </div>
    </>
  )
}

export default ColorCard;