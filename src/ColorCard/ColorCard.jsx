import classes from './ColorCard.module.css';

const ColorCard = ({ color }) => {
  return (
    <div className={classes.colorContainer}>
      <p>{`#${color}`}</p>
    </div>
  )
}

export default ColorCard;