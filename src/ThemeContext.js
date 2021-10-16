import React from 'react'
import PropTypes from 'prop-types'

import { createTheme } from './theme'

const defaultTheme = createTheme('red')

export const ThemeContext = React.createContext(defaultTheme)

export const ThemeContextProvider = (props) => {
  const { children } = props

  const [mainColor, setMainColor] = React.useState('green')

  return (
    <ThemeContext.Provider
      value={{
        theme: createTheme(mainColor),
        setMainColor
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

ThemeContextProvider.propTypes = {
  children: PropTypes.node
}

export default ThemeContextProvider
