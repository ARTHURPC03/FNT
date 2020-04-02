import React from 'react'

import Routes from './routes'
import Header from './components/Header'
import GlobalStyles from './global/styles'

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes />
    </>
  )
}

export default App
