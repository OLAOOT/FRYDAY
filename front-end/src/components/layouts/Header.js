import * as React from "react"
import styled from "styled-components"
import Logo from "../elements/Logo"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  margin-bottom: 64px;
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
    font-weight: ${props => props.theme.font.light};
    color: ${props => props.theme.color.lightbrown};
  }
`;

export default function Header() {
  return (
    <Container>
      <HeaderContainer>
        <Logo />
        <TextContainer>
          <div>Login</div>
        </TextContainer>
      </HeaderContainer>
    </Container>
  )
}