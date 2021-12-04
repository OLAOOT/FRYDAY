import React from "react";
import styled from "styled-components"
import { useLocation } from 'react-router-dom'
import queryString from "query-string"

import CategoryTitle from '../components/category/CategoryTitle'
import CategoryList from '../components/category/CategoryList'
import { categories } from '../lib/data'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 100px;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1024px;
`;

const dummy = [
  {
    id: 'zz1',
    name: '호빵',
    author: '이승우',
    like: 999,
    comment: 99
  },
  {
    id: 'zz2',
    name: '찐빵',
    author: '이승우',
    like: 999,
    comment: 99
  },
  {
    id: 'zz3',
    name: '마늘빵',
    author: '이승우',
    like: 999,
    comment: 99
  },
  {
    id: 'zz4',
    name: '스콘',
    author: '이승우',
    like: 999,
    comment: 99
  },
]

const Category = () => {
  
  const location = useLocation()
  const category = categories.find(c => c.id === queryString.parse(location.search).id)

  return (
    <Container>
      <ContentsContainer>
        <CategoryTitle
          name={category.name}
          author={category.author}
          iconSrc={category.iconSrc}
          color={category.color}
        />
        <CategoryList recipes={dummy} color={category.color} />
      </ContentsContainer>
    </Container>
  );
};

export default Category;
