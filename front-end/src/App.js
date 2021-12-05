import React, { useState, createContext } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './lib/styles/theme'
import GlobalStyles from './lib/styles/global-styles';

import Header from './components/layouts/header/Header'
import Footer from './components/layouts/Footer'

import Home from './pages/Home'
import Category from './pages/Category'
import Recipe from './pages/Recipe'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Write from './pages/Write'

export const LoginContext = createContext({
  ID: 0,
  setID: () => {},
  nickname: '',
  setNickname: () => {},
  success: false,
  setSuccess: () => {},
  logFlag: false,
  setLogFlag: () => {}
})

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  & > *:nth-last-child(2) {
    padding-bottom: 200px;
  }
`


export default function App() {

  const [ID, setID] = useState(0)
  const [nickname, setNickname] = useState('')
  const [success, setSuccess] = useState(false)
  const [logFlag, setLogFlag] = useState(false)

  return (
    <Container>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <LoginContext.Provider value={{ ID, setID, nickname, setNickname, success, setSuccess, logFlag, setLogFlag }}>
          <Router>
            <Header />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/category' element={<Category />} />
              <Route exact path='/recipe' element={<Recipe />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/signup' element={<SignUp />} />
              <Route exact path='/write' element={<Write />} />
            </Routes>
            <Footer />
          </Router>
        </LoginContext.Provider>
      </ThemeProvider>
    </Container>
  )
}