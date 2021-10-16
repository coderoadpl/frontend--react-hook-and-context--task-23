import React from 'react'

import Button from './components/Button'

import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'

export const App = () => {
  const [currentPage, setCurrentPage] = React.useState('page-one')
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
