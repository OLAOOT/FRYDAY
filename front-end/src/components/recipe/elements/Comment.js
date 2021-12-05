import React, { useContext } from 'react'
import styled from 'styled-components'

import Button from '../../elements/Button'
import { LoginContext } from '../../../App'
import axios from 'axios';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 24px 32px;
  background-color: ${props => props.theme.background['light' + props.color]};
  border-radius: 32px;
  box-shadow: ${props => props.theme.shadow.default};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

const Author = styled.div`
  font-size: 20px;
  color: ${props => props.theme.color[props.color]};
  margin-bottom: 16px;
`

const Content = styled.div`
  font-size: 24px;
  color: ${(props) => props.theme.color.brown};
`

const Comment = ({ id, color, author, comment, setCommentFlag }) => {

  const { nickname } = useContext(LoginContext)

  const handleDelete = async () => {
    if (window.confirm('삭제하시겠습니까?')) {
      const { data } = await axios.post(`/comment/delete/${id}`)
      setCommentFlag(true)
      alert('삭제되었습니다.')
    }
  }

  return (
    <Container color={color}>
      <ContentContainer>
        <Author color={color}>{author}</Author>
        <Content>{comment}</Content>
      </ContentContainer>
      {author === nickname && (<Button width="80px" onClick={handleDelete}>삭제</Button>)}
    </Container>
  )
}

export default Comment