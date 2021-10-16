import React from 'react'

import { createTheme } from './theme'

const defaultTheme = createTheme('red')

export const ThemeContext = React.createContext(defaultTheme)
