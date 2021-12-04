import React, { useState } from 'react'
import styled from 'styled-components'
import CommentIcon from '../elements/CommentIcon'
import Comment from './elements/Comment'
import theme from '../../lib/styles/theme'
import Button from '../elements/Button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const CommentTitle = styled.div`
  display: flex;
  align-items: center;
  margin: 144px 32px 32px;
  & > *:first-child {
    width: 32px;
    height: 32px;
    margin-right: 6px;
    & > * {
      width: 32px;
      height: 32px;
    }
  }
  & > div {
    margin-left: 8px;
    font-size: 24px;
    color: ${props => props.theme.color[props.color]};
    font-weight: ${props => props.theme.font.bold};
  }
`

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & > * + * {
    margin-top: 24px;
  }
`

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 24px 32px;
  margin-top: 24px;
  background-color: ${props => props.theme.background['light' + props.color]};
  border-radius: 32px;
  box-shadow: ${props => props.theme.shadow.default};
`

const Input = styled.input`
  font-size: 24px;
`

const Comments = ({ color, comment }) => {

  const [input, setInput] = useState('')

  return (
    <Container>
      <CommentTitle color={color}>
        <CommentIcon color={theme.color[color]} />
        <div>{comment.length}</div>
      </CommentTitle>
      <CommentContainer>
        {comment.map(comment => (
          <Comment key={comment} color={color} author={comment.author} comment={comment.comment} />
        ))}
      </CommentContainer>
      <InputContainer>
          <Input placeholder="댓글 작성" value={input} onChange={e => setInput(e.target.value)} />
          <Button width='120px' background={color}>작성</Button>
      </InputContainer>
    </Container>
  )
}

export default Comments