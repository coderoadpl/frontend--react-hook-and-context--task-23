import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../components/Button'

import { ThemeContext } from '../../ThemeContext'

import classes from './styles.module.css'

export const PageOne = (props) => {
  const {
    className,
    ...otherProps
  } = props

  const theme = React.useContext(ThemeContext)

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <h1>PageOne</h1>
      <Button
        style={{ backgroundColor: theme.mainColor }}
        onClick={() => alert('PageOne')}
      >
        Click me!
      </Button>
    </div>
  )
}

PageOne.propTypes = {
  className: PropTypes.string
}

export default PageOne
