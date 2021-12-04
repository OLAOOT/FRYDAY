import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router'
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

const Form = styled.div`
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
    const [name, setName] = useState('')
    const [checkName, setCheckName] = useState(false)

    const { setSignUpFlag } = useContext(LoginContext)
    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault()
        alert('temp')
        // if (checkSignUp) {
        //     //회원가입
        //     const res = await axios.post('/api/users', { id, password, name, email })
        //     .catch(err => console.log(err))
        //     alert('회원가입이 완료되었습니다.')
        //     const { data: response } = await axios.post('/api/login', { id, password })
        //     setSignUpFlag(true)
        //     navigate('/')
        // } else {
        //     alert('필수정보가 입력되지 않았습니다.')
        // }
    };

    useEffect(() => {
        setPasswordError(password !== passwordCheck)
    }, [password, passwordCheck])

    // useEffect(() => {
    //     if (
    //         id.length === 0 ||
    //         password.length === 0 ||
    //         passwordCheck.length === 0 ||
    //         name.length === 0 ||
    //         checkId !== '사용 가능한 ID입니다.' ||
    //         passwordError ||
    //         passwordViolate.length !== 0 ||
    //         checkName !== '사용 가능한 닉네임입니다.'
    //     ) {
    //         setCheckSignUp(false)
    //     } else {
    //         setCheckSignUp(true)
    //     }
    // })

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

    const handleCheckId = async () => {
      setCheckId('사용 가능한 ID입니다.') //temp
        // if (id.length === 0) {
        //     setCheckId('')
        // } else {
        //     const { data: overlap } = await axios(`/api/users/${id}`) //true면 중복
        //     if (overlap) {
        //         setCheckId('이미 사용 중인 ID입니다.')
        //     } else {
        //         setCheckId('사용 가능한 ID입니다.')
        //     }
        // }
    }

    const handleCheckName = async () => {
      setCheckName('사용 가능한 닉네임입니다.') //temp
        // if (id.length === 0) {
        //     setCheckId('')
        // } else {
        //     const { data: overlap } = await axios(`/api/users/${id}`) //true면 중복
        //     if (overlap) {
        //         setCheckId('이미 사용 중인 ID입니다.')
        //     } else {
        //         setCheckId('사용 가능한 ID입니다.')
        //     }
        // }
    }
    
    return (
      <Container>
        <h2>회원가입</h2>
        <Form>
          <InputContainer>
            <label htmlFor="user-id">ID</label>
            <Input name="user-id" value={id} placeholder="ID" required onChange={onChangeId} />
            <CheckButtonContainer>
              <Button onClick={handleCheckId} width="150px">중복 확인</Button>
            </CheckButtonContainer>
            <Notice>{checkId}</Notice>
          </InputContainer>
          <InputContainer>
            <label htmlFor="user-password">비밀번호 (영문 대소문자/숫자/특수문자 혼용 8자 이상, 20자 이하여야 합니다.)</label>
            <Input name="user-password" type="password" value={password} placeholder="PW" required onChange={onChangePassword} />
            <Notice style={{color : 'red'}}>{passwordViolate}</Notice>
          </InputContainer>
          <InputContainer>
            <label htmlFor="user-password-check">비밀번호 재입력</label>
            <Input name="user-password-check" type="password" value={passwordCheck} placeholder="PW" required onChange={onChangePasswordChk} />
            {passwordError ? <Notice style={{color : 'red'}}>비밀번호가 일치하지 않습니다.</Notice> : <div>&nbsp;</div>}
          </InputContainer>
          <InputContainer>
            <label htmlFor="user-name">닉네임</label>
            <Input name="user-name" value={name} placeholder="닉네임" required onChange={onChangeName} />
            <CheckButtonContainer>
              <Button onClick={handleCheckName} width="150px">중복 확인</Button>
            </CheckButtonContainer>
            <Notice>{checkName}</Notice>
          </InputContainer>
          <Button htmlType="submit" background={checkSignUp ? 'brown' : 'headerbrown'} onClick={onSubmit}>가입하기</Button>
        </Form>
      </Container>
    );
}

export default SignUp;