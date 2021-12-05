import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { LoginContext } from '../App'
import Button from '../components/elements/Button'
import Input from '../components/elements/Input'
import axios from 'axios'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 150px;
  & > h2 {
    font-size: 40px;
    font-weight: bold;
  }
`;

const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 64px;
  & > * + * {
    margin-top: 16px;
  }
`  

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 32px;
  & > * + * {
    margin-left: 16px;
  }
  width: 100%;
`

export default function Login() {

  const [ID, setID] = useState('')
  const [PW, setPW] = useState('')
  const { setLogFlag } = useContext(LoginContext)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    if (ID.length === 0) {
      alert('ID를 입력하세요.')
    } else if (PW.length === 0) {
      alert('비밀번호를 입력하세요.')
    } else {
      const { data } = await axios.post('/onLogin', {
        username: ID,
        password: PW
      })

      if (data.hasOwnProperty('msg')) {
        alert('존재하지 않는 ID입니다.')
      } else if (!data.hasOwnProperty('user_id')) {
        alert('로그인에 실패했습니다.')
      } else if (!data.user_id) {
        alert('입력하신 비밀번호가 일치하지 않습니다.')
      } else {
        sessionStorage.setItem('user_id', data.user_id)
        setLogFlag(true)
        navigate('/')
      }
    }
    // setSuccess(response.loginSuccess)
    // if (!response.loginSuccess) {
    //   alert(response.message)
    // } else {
    //   const { data: response } = await axios.get('/api/auth')
    //   if (response.isAdmin) {
    //     history.push('/manager')
    //   }
    // }
  }

  const handleIDChange = e => {
    setID(e.target.value)
  }

  const handlePWChange = e => {
    setPW(e.target.value)
  }

  // useEffect(() => {
  //   const session = Cookies.get('w_auth')
  //   if (session) {
  //     auth()
  //   }
  // }, [])

  // useEffect(() => {
  //   const session = Cookies.get('w_auth')
  //   if (session) {
  //     auth()
  //   }
  //   setSignUpFlag(false)
  // }, [signUpFlag])

  return (
    <>
      <Container>
        <h2>로그인</h2>
        <LoginContainer>
          <Input placeholder="ID" onChange={handleIDChange} />
          <Input type="password" placeholder="PW" onChange={handlePWChange} />
          <ButtonContainer>
            <Button type='submit' onClick={handleLogin} background='brown'>로그인</Button>
            <Button onClick={() => navigate('/signup')}>회원가입</Button>
          </ButtonContainer>
        </LoginContainer>
      </Container>
    </>
  )
}