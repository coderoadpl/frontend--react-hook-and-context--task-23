import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const PageTwo = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <h1>PageTwo</h1>
    </div>
  )
}

PageTwo.propTypes = {
  className: PropTypes.string
}

export default PageTwo
