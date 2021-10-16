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

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <h1>PageTwo</h1>
      <ThemeContext.Consumer>
        {
          (theme) => {
            return (
              <Button
                style={{ backgroundColor: theme.mainColor }}
                onClick={() => alert('PageTwo')}
              >
                Click me!
              </Button>
            )
          }
        }
      </ThemeContext.Consumer>
    </div>
  )
}

PageTwo.propTypes = {
  className: PropTypes.string
}

export default PageTwo
