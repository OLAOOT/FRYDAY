import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios'
import CategoryItem from '../category/elements/CategoryItem'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0 16px;
`;

const categoryArr = ['빵 · 토스트', '과자 · 스낵', '야채 · 샐러드', '냉동 · 냉장', '고기 · 육류', '닭 · 해산물']

const CategoryList = ({ category, color }) => {

  const [recipes, setRecipes] = useState([])

  const getData = async () => {
    const { data } = await axios.get(`/category/${categoryArr.indexOf(category) + 1}`)
    setRecipes(data)
    console.log(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Container>
      {recipes.length !== 0 && recipes.map((recipe) => (
        <CategoryItem
          href={"/recipe?id=" + recipe.post_id}
          key={recipe.post_title}
          name={recipe.post_title}
          author={recipe.user_nickname}
          like={recipe.likes}
          comment={recipe.com_count}
          color={color}
        />
      ))}
    </Container>
  );
};

export default CategoryList
