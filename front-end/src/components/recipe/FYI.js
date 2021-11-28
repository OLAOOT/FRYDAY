import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding: 32px;
  background-color: ${props => props.theme.background['light' + props.color]};
  border-radius: 32px;
  box-shadow: ${props => props.theme.shadow.default};
  & > div {
    font-weight: ${(props) => props.theme.font.bold};
    font-size: 24px;
    color: ${(props) => props.theme.color.brown};
  }
`;

const FYI = ({ fyi, color }) => {
  return (
    <Container color={color}>
      <div>{fyi}</div>
    </Container>
  )
}

export default FYI