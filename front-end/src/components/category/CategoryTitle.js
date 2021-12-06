import React from "react";
import styled from "styled-components";

import Title from '../elements/Title'
import SearchBar from './elements/SearchBar'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 464px;
  min-width: 464px;
  height: 300px;
  margin: 0 16px;
  padding: 32px;
  background-color: ${props => props.theme.background['light' + props.color]};
  border-radius: 32px;
  box-shadow: ${props => props.theme.shadow.default};
  & > *:first-child {
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  & > * + * {
    margin-top: 32px;
  }
  & > * > h2 {
    font-size: 40px;
    margin-top: 32px;
    margin-left: 0;
    padding: 8px 0;
  }
`;

const CategoryTitle = ({
  name,
  iconSrc,
  color,
  filter,
  setFilter
}) => {
  return (
    <Container color={color}>
      <Title name={name} iconSrc={iconSrc} color={color} />
      <SearchBar color={color} filter={filter} setFilter={setFilter} />
    </Container>
  );
};

export default CategoryTitle;
