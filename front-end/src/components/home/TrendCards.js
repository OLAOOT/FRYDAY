import React, { useRef, useEffect, useState } from "react";
import axios from 'axios'
import styled from "styled-components";

import SectionHeader from "./elements/SectionHeader";
import TrendCard from "./elements/TrendCard";

const Container = styled.div`
	margin: 0 0 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 1024px;
`;

const HeaderContainer = styled.div`
  width: 100%;
  padding-right: 16px;
  display: flex;
  justify-content: space-between;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  margin-top: 32px;
  padding: 4px 16px 16px;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  background-image: linear-gradient(to right, '#fdfdfd', '#fdfdfd'),
    linear-gradient(to right, '#fdfdfd', '#fdfdfd'),
    linear-gradient(to right, rgba(233, 213, 213, 0.35), rgba(255, 255, 255, 0)),
    linear-gradient(to left, rgba(233, 213, 213, 0.35), rgba(255, 255, 255, 0));

  background-position: left center, right center, left center, right center;
  background-repeat: no-repeat;
  background-color: '#fdfdfd';
  background-size: 15px 100%, 15px 100%, 10px 100%, 10px 100%;

  background-attachment: local, local, scroll, scroll;

  & > *:last-child:after {
    content: "";
    display: block;
    position: absolute;
    right: -16px;
    width: 16px;
    height: 16px;
  }
  
  & > * + * {
    margin-left: 32px;
  }
`;

const categories = [
  '빵 · 토스트',
  '과자 · 스낵',
  '야채 · 샐러드',
  '냉동 · 냉장',
  '고기 · 육류',
  '닭 · 해산물'
]

const dummy = [
  {
    id: 'dummy',
    name: '알감자버터구이',
    iconSrc: '/icon-carrot.svg',
    color: 'green',
    author: '이승우',
    like: 999,
    comment: 99
  }, {
    id: 'dummy',
    name: '감자칩',
    iconSrc: '/icon-cookie.svg',
    color: 'orange',
    author: '이승우',
    like: 999,
    comment: 99
  }, {
    id: 'dummy',
    name: '치킨너겟',
    iconSrc: '/icon-chicken.svg',
    color: 'pink',
    author: '이승우',
    like: 999,
    comment: 99
  }, {
    id: 'dummy',
    name: '새우튀김',
    iconSrc: '/icon-chicken.svg',
    color: 'pink',
    author: '이승우',
    like: 999,
    comment: 99
  }, {
    id: 'dummy',
    name: '군고구마',
    iconSrc: '/icon-carrot.svg',
    color: 'green',
    author: '이승우',
    like: 999,
    comment: 99
  }
]

const iconSrcArr = ['icon-toast.svg', 'icon-cookie.svg', 'icon-carrot.svg', 
              'icon-fridge.svg', 'icon-steak.svg', 'icon-chicken.svg']

const colorArr = ['yellow', 'orange', 'green', 'blue', 'red', 'pink']

const getIconSrc = category => iconSrcArr[category - 1]
const getColor = category => colorArr[category - 1]

const TrendCards = () => {
  const cardContainerRef = useRef(null)

  const [recipes, setRecipes] = useState([])

  // processIconAndColor(recipes)

  const getData = async () => {
    const { data } = await axios.get('/top10')
    setRecipes(data)
  }

  useEffect(() => {
    const scrollHorizontally = (e) => {
      e = window.event || e;
      const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
      cardContainerRef.current.scrollLeft -= delta * 60;
      e.preventDefault();
    };
    if (cardContainerRef.current.addEventListener) {
      // IE9, Chrome, Safari, Opera
      cardContainerRef.current.addEventListener(
        "mousewheel",
        scrollHorizontally,
        false
      );
      // Firefox
      cardContainerRef.current.addEventListener(
        "DOMMouseScroll",
        scrollHorizontally,
        false
      );
    } else {
      // IE 6/7/8
      cardContainerRef.current.attachEvent("onmousewheel", scrollHorizontally);
    }

    getData()
  }, []);

  return (
    <Container>
      <HeaderContainer>
        <SectionHeader>
          <h2>인기 레시피</h2>
          <h4>요즘 인기 있는 에어프라이어 요리</h4>
        </SectionHeader>
      </HeaderContainer>
      <CardContainer ref={cardContainerRef}>
        {recipes.length !== 0 && recipes.map((recipe) => (
          <TrendCard
            id={recipe.post_id}
            key={recipe.post_title}
            name={recipe.post_title}
            iconSrc={getIconSrc(recipe.category_id)}
            color={getColor(recipe.category_id)}
            author={recipe.user_nickname}
            like={recipe.likes}
            comment={recipe.com_count}
          />
        ))}
      </CardContainer>
    </Container>
  );
};

export default TrendCards;
