import React, { useContext } from "react";
import styled from "styled-components";

import Title from '../elements/Title';
import HeartIcon from "../elements/HeartIcon";

import theme from '../../lib/styles/theme';
import { LoginContext } from '../../App'
import axios from 'axios'

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
  padding-right: 16px;
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

  const { ID } = useContext(LoginContext)

  const handleLike = async () => {
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

  return (
    <Container>
      <Title name={name} iconSrc={iconSrc} color={color} />
      <DataOuterContainer color={color}>
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
