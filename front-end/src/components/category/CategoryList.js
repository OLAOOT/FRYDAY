import React from "react";
import styled from "styled-components";
import CategoryItem from '../category/elements/CategoryItem'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0 16px;
`;

const CategoryList = ({
  recipes, //id, name, author, like, comment
  color,
}) => {
  if (recipes === undefined) {
    recipes = []
  }

  return (
    <Container>
      {recipes.map((recipe) => (
        <CategoryItem
          href={"/recipe?id=" + recipe.id}
          key={recipe.name}
          name={recipe.name}
          author={recipe.author}
          like={recipe.like}
          comment={recipe.comment}
          color={color}
        />
      ))}
    </Container>
  );
};

export default CategoryList
