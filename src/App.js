import React from 'react'

import Button from './components/Button'

import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'

import { createTheme } from './theme'

const { mainColor } = createTheme('green')

export const App = () => {
  const [currentPage, setCurrentPage] = React.useState('page-one')

  return (
    <div>
      <Button
        style={{ backgroundColor: mainColor }}
        disabled={currentPage === 'page-one'}
        onClick={() => setCurrentPage(() => 'page-one')}
      >
        Go to PageOne
      </Button>
      <Button
        style={{ backgroundColor: mainColor }}
        disabled={currentPage === 'page-two'}
        onClick={() => setCurrentPage(() => 'page-two')}
      >
        Go to PageTwo
      </Button>
      {
        currentPage === 'page-one' ?
          <PageOne
            mainColor={mainColor}
          />
          :
          null
      }
      {
        currentPage === 'page-two' ?
          <PageTwo
            mainColor={mainColor}
          />
          :
          null
      }
    </div>
  )
}

export default App
