import React from 'react'

import Button from './components/Button'

import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'

import { ThemeContext } from './ThemeContext'
import { createTheme } from './theme'

const theme = createTheme('green')

export const App = () => {
  const [currentPage, setCurrentPage] = React.useState('page-one')

  return (
    <ThemeContext.Provider
      value={theme}
    >
      <div>
        <Button
          style={{ backgroundColor: theme.mainColor }}
          disabled={currentPage === 'page-one'}
          onClick={() => setCurrentPage(() => 'page-one')}
        >
          Go to PageOne
        </Button>
        <Button
          style={{ backgroundColor: theme.mainColor }}
          disabled={currentPage === 'page-two'}
          onClick={() => setCurrentPage(() => 'page-two')}
        >
          Go to PageTwo
        </Button>
        {
          currentPage === 'page-one' ?
            <PageOne />
            :
            null
        }
        {
          currentPage === 'page-two' ?
            <PageTwo />
            :
            null
        }
      </div>
    </ThemeContext.Provider>
  )
}

export default App
