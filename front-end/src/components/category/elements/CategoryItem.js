import React, { useState } from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";

import HeartIcon from '../../elements/HeartIcon'
import CommentIcon from '../../elements/CommentIcon';

import theme from '../../../lib/styles/theme'

const Container = styled(Link)`
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 500px;
  height: 82px;
  margin-bottom: 16px;
  padding: 16px 32px 16px 16px;
  border-radius: 16px;
  box-shadow: ${props => props.theme.shadow.default};
  background-color: ${(props) =>
    props.theme.background[(props.background ? "" : "light") + props.color]};
  & > h4 {
    font-size: 24px;
    font-weight: ${(props) => props.theme.font.bold};
    color: ${(props) => props.theme.color.black};
  }
  &:active, &:focus {
    background-color: ${(props) => props.theme.background[props.focused]};
  }
`;

const DataOuterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 100%;
  padding: 16px;
  border: 1px solid ${(props) => props.theme.color[props.color]};
  border-radius: 10px;
  & > * + * {
    margin-left: 8px;
  }
`;

const LikeCommentContainer = styled.div`
  display: flex;
  align-items: center;
  & > * + * {
    margin-left: 8px;
  }
`

const DataInnerContainer = styled.div`
  display: flex;
  align-items: center;
  & > *:first-child {
    width: 12px;
    height: 12px;
    margin-right: 4px;
    & > * {
      width: 12px;
      height: 12px;
    }
  }
  & > div {
    font-size: 12px;
    color: ${(props) => props.theme.color[props.color]};
  }
`;

const Author = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.color[props.color]};
`

const CategoryItem = ({
  href,
  name,
  author,
  like,
  comment,
  color,
}) => {
  return (
    // <Link to={href} color={color} focused={color}>
      <Container to={href} color={color} focused={color}>
        <DataOuterContainer color={color}>
          <LikeCommentContainer>
            <DataInnerContainer color={color}>
              <HeartIcon color={theme.color[color]} />
              <div>{like}</div>
            </DataInnerContainer>
            <DataInnerContainer color={color}>
              <CommentIcon color={theme.color[color]} />
              <div>{comment}</div>
            </DataInnerContainer>
          </LikeCommentContainer>
          <Author color={color}>{author}</Author>
        </DataOuterContainer>
        <h4>{name}</h4>
      </Container>
    // </Link>
  );
};

export default CategoryItem;
