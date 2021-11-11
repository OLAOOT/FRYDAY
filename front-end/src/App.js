import React from 'react'
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './lib/styles/theme'

import Header from './components/layouts/header/Header'
import Footer from './components/layouts/Footer'

import Home from './pages/Home'
import Category from './pages/Category'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/category' element={<Category />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}