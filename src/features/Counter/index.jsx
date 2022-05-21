import Button from '@mui/material/Button'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from './counterSlice'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
})

CounterFeatured.propTypes = {}

function CounterFeatured(props) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const count = useSelector(state => state.count)

  const handleIncreaseClick = () => {
    const action = increase() //action creator
    console.log(action)
    dispatch(action)
  }

  const handleDecreaseClick = () => {
    const action = decrease() //action creator
    dispatch(action)
  }

  return (
    <div>
      <p>Counter : {count}</p>
      <Button className={classes.root} onClick={handleIncreaseClick}>
        Increase
      </Button>
      <Button className={classes.root} onClick={handleDecreaseClick}>
        Decrease
      </Button>
    </div>
  )
}

export default CounterFeatured
