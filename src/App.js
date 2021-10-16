import React from 'react'

import Button from './components/Button'

import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'

import { ThemeContext } from './ThemeContext'

export const App = () => {
  const [currentPage, setCurrentPage] = React.useState('page-one')

  const { theme, setMainColor } = React.useContext(ThemeContext)

  return (
    <div>
      <Button
        disabled={currentPage === 'page-one'}
        onClick={() => setCurrentPage(() => 'page-one')}
      >
        Go to PageOne
      </Button>
      <Button
        disabled={currentPage === 'page-two'}
        onClick={() => setCurrentPage(() => 'page-two')}
      >
        Go to PageTwo
      </Button>
      <br />
      <Button
        disabled={theme.mainColor === 'green'}
        onClick={() => setMainColor(() => 'green')}
      >
        Color green
      </Button>
      <Button
        disabled={theme.mainColor === 'yellow'}
        onClick={() => setMainColor(() => 'yellow')}
      >
        Color yellow
      </Button>
      <Button
        disabled={theme.mainColor === 'blue'}
        onClick={() => setMainColor(() => 'blue')}
      >
        Color blue
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
  )
}

export default App
