import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../components/Button'

import classes from './styles.module.css'

export const PageOne = (props) => {
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
      <h1>PageOne</h1>
      <Button
        style={{ backgroundColor: mainColor }}
        onClick={() => alert('PageOne')}
      >
        Click me!
      </Button>
    </div>
  )
}

PageOne.propTypes = {
  className: PropTypes.string,
  mainColor: PropTypes.string
}

export default PageOne
