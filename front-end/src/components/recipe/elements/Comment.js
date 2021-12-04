import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding: 24px 32px;
  background-color: ${props => props.theme.background['light' + props.color]};
  border-radius: 32px;
  box-shadow: ${props => props.theme.shadow.default};
`;

const Author = styled.div`
  font-size: 20px;
  color: ${props => props.theme.color[props.color]};
  margin-bottom: 16px;
`

const Comment = styled.div`
  font-size: 24px;
  color: ${(props) => props.theme.color.brown};
`

const FYI = ({ color, author, comment }) => {
  return (
    <Container color={color}>
      <Author color={color}>{author}</Author>
      <Comment>{comment}</Comment>
    </Container>
  )
}

export default FYI