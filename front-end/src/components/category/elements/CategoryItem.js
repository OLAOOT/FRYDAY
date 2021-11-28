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
  padding: 16px 40px 16px 16px;
  border-radius: 16px;
  box-shadow: ${props => props.theme.shadow.default};
  background-color: ${(props) =>
    props.theme.background[(props.background ? "" : "light") + props.color]};
  & > h4 {
    font-size: 28px;
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
  width: 170px;
  height: 100%;
  padding: 16px;
  border: 1px solid ${(props) => props.theme.color[props.color]};
  border-radius: 10px;
`;

const DataInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  & > *:first-child {
    width: 18px;
    height: 18px;
    margin-right: 6px;
    & > * {
      width: 18px;
      height: 18px;
    }
  }
  & > div {
    font-size: 17px;
    color: ${(props) => props.theme.color[props.color]};
  }
`;

const CategoryItem = ({
  href,
  name,
  like,
  comment,
  color,
}) => {
  return (
    // <Link to={href} color={color} focused={color}>
      <Container to={href} color={color} focused={color}>
        <DataOuterContainer color={color}>
          <DataInnerContainer color={color}>
            <HeartIcon color={theme.color[color]} />
            <div>{like}</div>
          </DataInnerContainer>
          <DataInnerContainer color={color}>
            <CommentIcon color={theme.color[color]} />
            <div>{comment}</div>
          </DataInnerContainer>
        </DataOuterContainer>
        <h4>{name}</h4>
      </Container>
    // </Link>
  );
};

export default CategoryItem;
