import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from 'react-router-dom'
import queryString from "query-string"

import RecipeTitle from '../components/recipe/RecipeTitle'
import RecipeList from '../components/recipe/RecipeList'
import FYI from '../components/recipe/elements/FYI'
import { categories } from '../lib/data'
import Comments from '../components/recipe/Comments'
import axios from "axios";

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

const iconSrcArr = ['icon-toast.svg', 'icon-cookie.svg', 'icon-carrot.svg', 
              'icon-fridge.svg', 'icon-steak.svg', 'icon-chicken.svg']

const colorArr = ['yellow', 'orange', 'green', 'blue', 'red', 'pink']

const getIconSrc = category => iconSrcArr[category - 1]
const getColor = category => colorArr[category - 1]

const Recipe = () => {

  const [recipe, setRecipe] = useState([])
  const [contents, setContents] = useState([])
  const [comment, setComment] = useState([])
  const [commentFlag, setCommentFlag] = useState(false)
  const [likeFlag, setLikeFlag] = useState(false)

  const location = useLocation()
  const id = queryString.parse(location.search).id

  const getData = async () => {
    const { data } = await axios.get(`/recipe/${id}`)
    setRecipe(data[0])
    setContents(data[0].contents.split('\r\n'))

    const {data: commentData} = await axios.get(`/comment/${id}`)
    setComment(commentData)
  }

  const getCommentData = async () => {
    const {data: commentData} = await axios.get(`/comment/${id}`)
    setComment(commentData)
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    getCommentData()
    setCommentFlag(false)
    setComment('')
  }, [commentFlag])

  useEffect(() => {
    getData()
    setLikeFlag(false)
  }, [likeFlag])

  return (
    <Container>
      {comment && (
        <ContentsContainer>
          <RecipeTitle
            id={id}
            name={recipe.post_title}
            iconSrc={getIconSrc(recipe.category_id)}
            color={getColor(recipe.category_id)}
            author={recipe.user_nickname}
            like={recipe.likes}
            setLikeFlag={setLikeFlag}
          />
          <RecipeList recipe={contents} color={getColor(recipe.category_id)} />
          <FYI fyi={recipe.post_fyi} color={getColor(recipe.category_id)} />
          <Comments color={getColor(recipe.category_id)} id={id} comment={comment} setCommentFlag={setCommentFlag} />
        </ContentsContainer>
      )}
    </Container>
  );
};

export default Recipe;
