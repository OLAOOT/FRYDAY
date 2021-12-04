import React, { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import Icon from "../../elements/Icon";
import HeartIcon from "../../elements/HeartIcon";
import CommentIcon from "../../elements/CommentIcon";

import theme from "../../../lib/styles/theme";

const Container = styled.div`
	position: relative;
	cursor: pointer;
	-webkit-tap-highlight-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 256px;
  min-width: 256px;
  height: 179px;
  border-radius: 16px;
  padding: 16px;
	${props => props.background && `background-color: ${props.theme.background[props.background]}`};
  box-shadow: ${(props) => props.theme.shadow.default};
  & > h4 {
    height: 72px;
    padding: 16px 0;
    vertical-align: bottom;
    font-weight: ${(props) => props.theme.font.bold};
    color: ${(props) => props.theme.color.lightblack};
    font-size: 28px;
  }
  & > *:first-child {
    width: 48px;
    height: 48px;
    border-radius: 24px;
    & > * {
      width: 24px;
      height: 24px;
    }
  }
  &:active, &:focus {
    background-color: ${(props) => props.theme.background[props.focused]};
  }
`;

const DataOuterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 26px;
  padding: 0 16px 0 0px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.background[props.color]};
`;

const DataInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > *:first-child {
    width: 12px;
    margin-right: 4px;
    margin-left: 8px;
    & > * {
      width: 12px;
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
  margin-left: 16px;
`

const TrendCard = ({
  id,
  name,
  iconSrc,
  color,
  author,
  like,
  comment,
}) => {
	
	const [currentBG, setCurrentBG] = useState(null)
	
  return (
    <Link to={"/recipe?id=" + id}>
      <Container background={currentBG} focused={color}>
        <Icon src={iconSrc} background={color} />
        <h4>{name}</h4>
        <DataOuterContainer color={color}>
          <DataInnerContainer color={color}>
            <HeartIcon color={theme.color[color]} />
            <div>{like}</div>
          </DataInnerContainer>
          <DataInnerContainer color={color}>
            <CommentIcon color={theme.color[color]} />
            <div>{comment}</div>
          </DataInnerContainer>
          <Author color={color}>{author}</Author>
        </DataOuterContainer>
      </Container>
    </Link>
  );
};

export default TrendCard;
