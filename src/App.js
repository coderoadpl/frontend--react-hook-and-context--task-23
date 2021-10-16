import React from 'react'

import Button from './components/Button'

import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'

import { ThemeContext } from './ThemeContext'
import { createTheme } from './theme'

const theme = createTheme('green')

export const App = () => {
  const [currentPage, setCurrentPage] = React.useState('page-one')
  const [mainColor, setMainColor] = React.useState('green')

  return (
    <ThemeContext.Provider
      value={createTheme(mainColor)}
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
        <br />
        <Button
          style={{ backgroundColor: theme.mainColor }}
          disabled={mainColor === 'green'}
          onClick={() => setMainColor(() => 'green')}
        >
          Color green
        </Button>
        <Button
          style={{ backgroundColor: theme.mainColor }}
          disabled={mainColor === 'yellow'}
          onClick={() => setMainColor(() => 'yellow')}
        >
          Color yellow
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
