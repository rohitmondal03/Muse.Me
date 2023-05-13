import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import "./App.css"
import AnimatedRoutes from './components/AnimatedRoutes'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  )
}

export default App