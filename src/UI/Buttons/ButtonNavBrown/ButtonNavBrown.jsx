import React from 'react'
import classes from './ButtonNavBrown.module.css'

const ButtonNavBrown = ({ children, ...props }) => {
  return (
    <button className={classes.buttonNavBrown} {...props}>
      {children}
    </button>
  )
}

export default ButtonNavBrown
