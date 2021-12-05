import React from "react";
import styled from "styled-components";
import RecipeItem from "./elements/RecipeItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: 1024px;
  margin-bottom: 12px;
`;

const RecipeList = ({
  recipe,
  color,
}) => {
  return (
    <Container>
      {recipe && recipe.map((step, index) => (
        <RecipeItem key={step} step={step} index={index + 1} color={color} />
      ))}
    </Container>
  );
};

export default RecipeList;
