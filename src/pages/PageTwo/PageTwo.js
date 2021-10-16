import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../components/Button'

import classes from './styles.module.css'

export const PageTwo = (props) => {
  const {
    className,
    mainColor,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <h1>PageTwo</h1>
      <Button
        style={{ backgroundColor: mainColor }}
        onClick={() => alert('PageTwo')}
      >
        Click me!
      </Button>
    </div>
  )
}

PageTwo.propTypes = {
  className: PropTypes.string,
  mainColor: PropTypes.string
}

export default PageTwo
