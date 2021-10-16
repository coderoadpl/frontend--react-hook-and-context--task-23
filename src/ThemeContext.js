import React from 'react'

import { createTheme } from './theme'

const theme = createTheme('red')

export const ThemeContext = React.createContext(theme)
