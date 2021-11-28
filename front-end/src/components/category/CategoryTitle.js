import React from "react";
import styled from "styled-components";

import Title from '../elements/Title'

const Container = styled.div`
  width: 464px;
  min-width: 464px;
  height: 232px;
  margin: 0 16px;
  padding: 32px;
  background-color: ${props => props.theme.background['light' + props.color]};
  border-radius: 32px;
  box-shadow: ${props => props.theme.shadow.default};
  & > * {
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
  }
  & > * > h2 {
    font-size: 40px;
    margin-left: 0;
    padding: 8px 0;
  }
`;

const CategoryTitle = ({
  name,
  iconSrc,
  color,
}) => {
  return (
    <Container color={color}>
      <Title name={name} iconSrc={iconSrc} color={color} />
    </Container>
  );
};

export default CategoryTitle;
