import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router'
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

const Form = styled.form`
    & > * {
        margin-top: 48px;
    }
    & > *:last-child {
        margin-bottom: 64px;
    }
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: 16px;
  }
  & > label {
    font-size: 20px;
  }
`
const Notice = styled.div`
  margin: 16px;
`

const CheckButtonContainer = styled.div`
  width: 100%;
  text-align: center;
`

const SignUp = () => {

    const [id,setId] = useState('');
    const [checkId, setCheckId] = useState('') //id 중복확인
    const [password,setPassword] = useState('');
    const [passwordCheck,setPasswordCheck] = useState('');
    const [passwordError,setPasswordError] = useState(false); //pw 확인과 같은지
    const [passwordViolate, setPasswordViolate] = useState('') //pw reg
    const [checkSignUp, setCheckSignUp] = useState(false) //회원가입 가능한지
    const [email, setEmail] = useState('')
    const [emailViolate, setEmailViolate] = useState('') //email reg
    const [checkEmail, setCheckEmail] = useState(false)
    const [name, setName] = useState('')
    const [checkName, setCheckName] = useState(false)

    const { setLogFlag } = useContext(LoginContext)
    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault()
        if (checkSignUp) {
            //회원가입
            const res = await axios.post('/register', {
              username: id,
              password,
              email,
              nickname: name
            })
            .catch(err => console.log(err))

            const { data } = await axios.post('/onLogin', {
              username: id,
              password
            })
            sessionStorage.setItem('user_id', data.user_id)
            setLogFlag(true)
            alert('회원가입이 완료되었습니다.')
            navigate('/')
        } else {
            alert('필수정보가 입력되지 않았습니다.')
        }
    };

    useEffect(() => {
        setPasswordError(password !== passwordCheck)
    }, [password, passwordCheck])

    useEffect(() => {
      if (
          id.length === 0 ||
          password.length === 0 ||
          passwordCheck.length === 0 ||
          name.length === 0 ||
          email.length === 0 ||
          checkId !== '사용 가능한 ID입니다.' ||
          checkEmail !== '사용 가능한 E-MAIL입니다.' ||
          checkName !== '사용 가능한 닉네임입니다.' ||
          passwordError ||
          passwordViolate.length !== 0 ||
          emailViolate.length !== 0
      ) {
          setCheckSignUp(false)
      } else {
          setCheckSignUp(true)
      }
  })

    const onChangeId = (e) => {
        setId(e.target.value)
        setCheckId('')
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value)
        checkViolate(e.target.value)
    };
    const onChangePasswordChk = (e) => {
        setPasswordCheck(e.target.value)
    };
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
        checkEmailViolate(e.target.value)
        setCheckEmail('')
    }
    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const checkViolate = pw => {
      const reg = /^(?=.*?[\w])(?=.*?[\d])(?=.*?[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]).{8,20}$/
      if (pw.length === 0) {
          setPasswordViolate('')
      } else if (!reg.test(pw)) {
          setPasswordViolate('비밀번호 생성 규칙에 맞지 않습니다.')
      } else {
          setPasswordViolate('')
      }
    }

    const checkEmailViolate = em => {
      const reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
      if (em.length === 0) {
          setEmailViolate('')
      } else if (!reg.test(em)) {
          setEmailViolate('이메일 규칙에 맞지 않습니다.')
      } else {
          setEmailViolate('')
      }
    }

    const handleCheckId = async () => {
      if (id.length === 0) {
          setCheckId('')
      } else {
        const { data } = await axios.post(`/duplicate/username`, {
          username: id
        })
        console.log(data)
        if (data.length === 1) {
            setCheckId('이미 사용 중인 ID입니다.')
        } else {
            setCheckId('사용 가능한 ID입니다.')
        }
      }
    }

    const handleCheckEmail = async () => {
      if (email.length === 0) {
          setCheckEmail('')
      } else {
        const { data } = await axios.post(`/duplicate/email`, {
          email
        })
        if (data.length === 1) {
            setCheckEmail('이미 사용 중인 E-MAIL입니다.')
        } else {
            setCheckEmail('사용 가능한 E-MAIL입니다.')
        }
      }
    }

    const handleCheckName = async () => {
      if (name.length === 0) {
          setCheckName('')
      } else {
        const { data } = await axios.post(`/duplicate/nickname`, {
          nickname: name
        })
        if (data.length === 1) {
          setCheckName('이미 사용 중인 닉네임입니다.')
        } else {
          setCheckName('사용 가능한 닉네임입니다.')
        }
      }
    }
    
    return (
      <Container>
        <h2>회원가입</h2>
        <Form onSubmit={onSubmit}>
          <InputContainer>
            <label htmlFor="user-id">ID</label>
            <Input name="user-id" value={id} placeholder="ID" onChange={onChangeId} />
            <CheckButtonContainer>
              <Button type="button" onClick={handleCheckId} width="150px">중복 확인</Button>
            </CheckButtonContainer>
            <Notice>{checkId}</Notice>
          </InputContainer>
          <InputContainer>
            <label htmlFor="user-password">비밀번호 (영문 대소문자/숫자/특수문자 혼용 8자 이상, 20자 이하여야 합니다.)</label>
            <Input name="user-password" type="password" value={password} placeholder="PW" onChange={onChangePassword} />
            <Notice style={{color : 'red'}}>{passwordViolate}</Notice>
          </InputContainer>
          <InputContainer>
            <label htmlFor="user-password-check">비밀번호 재입력</label>
            <Input name="user-password-check" type="password" value={passwordCheck} placeholder="PW" onChange={onChangePasswordChk} />
            {passwordError ? <Notice style={{color : 'red'}}>비밀번호가 일치하지 않습니다.</Notice> : <div>&nbsp;</div>}
          </InputContainer>
          <InputContainer>
            <label>E-MAIL</label>
            <Input value={email} placeholder="E-MAIL" onChange={onChangeEmail} />
            <CheckButtonContainer>
              <Button type="button" onClick={handleCheckEmail} width="150px">중복 확인</Button>
            </CheckButtonContainer>
            <Notice>{emailViolate}</Notice>
            <Notice>{checkEmail}</Notice>
          </InputContainer>
          <InputContainer>
            <label htmlFor="user-name">닉네임</label>
            <Input name="user-name" value={name} placeholder="닉네임" onChange={onChangeName} />
            <CheckButtonContainer>
              <Button type="button" onClick={handleCheckName} width="150px">중복 확인</Button>
            </CheckButtonContainer>
            <Notice>{checkName}</Notice>
          </InputContainer>
          <Button type="submit" disabled={!checkSignUp} background={checkSignUp ? 'brown' : 'headerbrown'}>가입하기</Button>
        </Form>
      </Container>
    );
}

export default SignUp;