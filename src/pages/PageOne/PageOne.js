import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const PageOne = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <h1>PageOne</h1>
    </div>
  )
}

PageOne.propTypes = {
  className: PropTypes.string
}

export default PageOne
