import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from 'react-router-dom'
import queryString from "query-string"

import RecipeTitle from '../components/recipe/RecipeTitle'
import RecipeList from '../components/recipe/RecipeList'
import FYI from '../components/recipe/elements/FYI'
import { categories } from '../lib/data'
import Comments from '../components/recipe/Comments'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 100px;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1024px;
  & > * + * {
    margin-top: 32px;
  }
`;


const dummy = {
  id: 'zz1',
  author: '이승우',
  category: 'bread',
  name: '호빵',
  like: 999,
  list: [
    '호일을 깔고 160도로 예열합니다',
    '10분간 가열합니다',
    '뒤집어서 다시 10분간 가열합니다'
  ],
  fyi: '뜨거울 수 있으니 잡을 때 조심하세요!',
  comment: [
    {
      author: '이승우',
      comment: '너무 맛있어요~'
    },
    {
      author: '송정헌',
      comment: '완전 꿀팁이네요!'
    },
  ]
}

const Recipe = () => {

  const [recipe, setRecipe] = useState(dummy)
  const category = categories.find(c => c.id === recipe.category)

  return (
    <Container>
      {recipe && (
        <ContentsContainer>
          <RecipeTitle
            name={recipe.name}
            iconSrc={category.iconSrc}
            color={category.color}
            author={recipe.author}
            like={recipe.like}
          />
          <RecipeList recipe={recipe.list} color={category.color} />
          <FYI fyi={recipe.fyi} color={category.color} />
          <Comments color={category.color} comment={recipe.comment} />
        </ContentsContainer>
      )}
    </Container>
  );
};

export default Recipe;
