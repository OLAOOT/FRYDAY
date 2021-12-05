import React, { useEffect, useContext } from "react"
import styled from "styled-components"
import Logo from "./Logo"
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../../../App'
import axios from 'axios'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 128px;
  background-color: ${props => props.theme.color.headerbrown};
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75vw;
  max-width: 1280px;
  height: 24px;
  margin: 44px 0 0;
  padding: 0 16px;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  & > * {
    font-size: 24px;
    color: ${props => props.theme.color.black};
    margin-left: 32px;
  }
`;

const User = styled.div`
  font-size: 18px;
`

const Login = styled.div`
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`

export default function Header() {
  
  const { ID, setID, nickname, setNickname, logFlag, setLogFlag } = useContext(LoginContext)
  const navigate = useNavigate()

  const getName = async (id) => {
    const { data } = await axios.get(`/user/${id}`)
    if (data.length !== 0) {
      setID(id)
      setNickname(data[0].user_nickname)
    }
  }

  useEffect(() => {
    if (sessionStorage.getItem('user_id') !== null) {
      setLogFlag(true)
    }
  }, [])

  useEffect(() => {
    if (sessionStorage.getItem('user_id') !== null) {
      getName(sessionStorage.getItem('user_id'))
    }
    setLogFlag(false)
  }, [logFlag])

  const handleLogin = () => {
    // 로그아웃
    if (ID !== 0) {
      sessionStorage.setItem('user_id', null)
      setID(0)
      setNickname('')
      setLogFlag(true)
      navigate('/')
    } else { // 로그인
      navigate('/login')
    }
  }

  return (
    <Container>
      <HeaderContainer>
        <Logo />
        <TextContainer>
          <User>{nickname && `${nickname}님 환영합니다.`}</User>
          <Login onClick={handleLogin}>{ID !== 0 ? 'Logout' : 'Login'}</Login>
        </TextContainer>
      </HeaderContainer>
    </Container>
  )
}