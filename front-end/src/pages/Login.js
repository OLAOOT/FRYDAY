import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { LoginContext } from '../App'
import Button from '../components/elements/Button'
import Input from '../components/elements/Input'

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

  const { ID, setID, PW, setPW, success, setSuccess, signUpFlag, setSignUpFlag } = useContext(LoginContext)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    alert('temp')
    // const { data: response } = await axios.post('/api/login', {
    //     id: ID,
    //     password: PW
    //   }
    // )
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
            <Button onClick={() => navigate('/signup')}>회원가입</Button>
            <Button type='submit' background='brown'>로그인</Button>
          </ButtonContainer>
        </LoginContainer>
      </Container>
    </>
  )
}