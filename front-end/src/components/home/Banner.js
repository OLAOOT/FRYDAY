import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 180px;
  margin-bottom: 64px;
  background-color: ${props => props.theme.color.headerbrown};
  box-shadow: ${props => props.theme.shadow.bottom};
`;

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40vw;
  margin-bottom: 80px;
  max-width: 720px;
  & > img {
    width: 75px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > * {
    font-size: 28px;
    font-weight: ${(props) => props.theme.font.light};
    color: ${(props) => props.theme.color.lightbrown};
  }
  & > h1 {
    font-weight: ${(props) => props.theme.font.bold};
    color: ${(props) => props.theme.color.black};
    margin-top: 20px;
  }
`;

const Vr = styled.div`
  width: 4px;
  height: 100%;
  background-color: ${(props) => props.theme.color.lightbrown};
`;

export default function Banner() {
  return (
    <Container>
      <BannerContainer>
        <img src="symbol.svg" alt="symbol" />
        <Vr />
        <TextContainer>
          <h2>에어프라이어 쓸 땐?</h2>
          <h1>프라이데이</h1>
        </TextContainer>
      </BannerContainer>
    </Container>
  )
}