import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../components/Button'

import { ThemeContext } from '../../ThemeContext'

import classes from './styles.module.css'

export const PageTwo = (props) => {
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
      <h1>PageTwo</h1>
      <Button
        style={{ backgroundColor: theme.mainColor }}
        onClick={() => alert('PageTwo')}
      >
        Click me!
      </Button>
    </div >
  )
}

PageTwo.propTypes = {
  className: PropTypes.string
}

export default PageTwo
