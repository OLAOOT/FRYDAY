import React from "react"
import styled from "styled-components"
import Logo from "./Logo"
import { Link } from 'react-router-dom'

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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  & > * {
    font-size: 24px;
    color: ${props => props.theme.color.black};
  }
`;

const Login = styled(Link)`
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`

export default function Header() {
  return (
    <Container>
      <HeaderContainer>
        <Logo />
        <TextContainer>
          <Login to='/login'>Login</Login>
        </TextContainer>
      </HeaderContainer>
    </Container>
  )
}