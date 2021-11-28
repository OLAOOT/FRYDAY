import React from "react";
import styled from "styled-components";

import Title from '../elements/Title';
import HeartIcon from "../elements/HeartIcon";

import theme from '../../lib/styles/theme';

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
  justify-content: space-between;
  align-items: center;
  & > *:first-child {
    margin-right: 8px;
  }
`;

const DataInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const RecipeTitle = ({
  name,
  iconSrc,
  color,
  like
}) => {
  return (
    <Container>
      <Title name={name} iconSrc={iconSrc} color={color} />
      <DataOuterContainer color={color}>
        <DataInnerContainer color={color}>
          <HeartIcon color={theme.color[color]} />
          <div>{like}</div>
        </DataInnerContainer>
      </DataOuterContainer>
    </Container>
  );
};

export default RecipeTitle;
