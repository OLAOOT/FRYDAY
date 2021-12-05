import React, { useContext } from "react";
import styled from "styled-components";

import Title from '../elements/Title';
import HeartIcon from "../elements/HeartIcon";
import Button from '../elements/Button'

import theme from '../../lib/styles/theme';
import { LoginContext } from '../../App'
import axios from 'axios'
import { useNavigate } from "react-router";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  margin-bottom: 24px;
  padding: 0 16px;
  
  & > * > h2 {
    font-size: 48px;
    margin-left: 32px;
    padding: 12px 0;
  }
`;

const DataOuterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  & > *:first-child {
    margin-right: 8px;
  }
`;

const DataInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
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
    color: ${(props) => props.theme.color[props.color]};
    font-size: 28px;
  }
`;

const Author = styled.div`
  color: ${(props) => props.theme.color[props.color]};
  font-size: 24px;
  padding: 0 16px;
`

const RecipeTitle = ({
  id,
  name,
  iconSrc,
  color,
  author,
  like,
  setLikeFlag
}) => {

  const { ID, nickname } = useContext(LoginContext)

  const navigate = useNavigate()

  const handleDelete = async () => {
    if (window.confirm('삭제하시겠습니까?')) {
      const { data } = await axios.post(`/recipe/delete/${id}`)
      alert('삭제되었습니다.')
      navigate('/')
    }
  }

  const handleLike = async () => {
    if (!ID) {
      alert('로그인 후 이용 가능합니다.')
    } else {
      const { data } = await axios.get(`/likecheck/${ID}`)
      console.log(data)
      if (data.length === 0) {
        // 좋아요
        const { res } = await axios.get(`/likeadd/${ID}/${id}`)
        setLikeFlag(true)
      } else {
        if (data.map(e => e.post_id).includes(+id)) {
          //좋아요 취소
          const { res } = await axios.get(`/likeminus/${ID}/${id}`)
          setLikeFlag(true)
        } else {
          // 좋아요
          const { res } = await axios.get(`/likeadd/${ID}/${id}`)
          setLikeFlag(true)
        }
      }
    }
  }

  return (
    <Container>
      <Title name={name} iconSrc={iconSrc} color={color} />
      <DataOuterContainer color={color}>
        {author === nickname && (<Button width="80px" onClick={handleDelete}>삭제</Button>)}
        <Author color={color}>{author}</Author>
        <DataInnerContainer onClick={handleLike} color={color}>
          <HeartIcon color={theme.color[color]} />
          <div>{like}</div>
        </DataInnerContainer>
      </DataOuterContainer>
    </Container>
  );
};

export default RecipeTitle;
