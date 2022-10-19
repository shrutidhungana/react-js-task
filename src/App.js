import React from 'react'
import AppRouter from './AppRouter/AppRouter'
import TableProvider from './Context/TableContext'

const App = () => {
  return (
    <div>
      <TableProvider>
        <AppRouter />
        </TableProvider>
    </div>
  )
}

export default App
