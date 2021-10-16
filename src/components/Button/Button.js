import React from 'react'
import PropTypes from 'prop-types'

import { ThemeContext } from '../../ThemeContext'

import classes from './styles.module.css'

export const Button = (props) => {
  const {
    className,
    style,
    ...otherProps
  } = props

  const { theme } = React.useContext(ThemeContext)

  return (
    <button
      style={{ backgroundColor: theme.mainColor, ...style }}
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    />
  )
}

Button.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

export default Button
