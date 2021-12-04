import React, { useRef, useEffect, useState } from "react";
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

const processIconAndColor = (recipes, categories) => {
  recipes.forEach(recipe => {
    switch (recipe.category_id) {
      case "": //해산물 닭
        recipe.iconSrc = "icon-chicken.svg";
        recipe.color = "pink";
        break;
      case "": //과자 스낵
        recipe.iconSrc = "icon-cookie.svg";
        recipe.color = "orange";
        break;
      case "": //냉동 냉장
        recipe.iconSrc = "icon-fridge.svg";
        recipe.color = "blue";
        break;
      case "": //야채
        recipe.iconSrc = "icon-carrot.svg";
        recipe.color = "green";
        break;
      case "": //고기
        recipe.iconSrc = "icon-steak.svg";
        recipe.color = "red";
        break;
      default: //빵
        recipe.iconSrc = "icon-toast.svg";
        recipe.color = "yellow";
        break;
    }
  });

  return recipes;
}

const TrendCards = () => {
  const cardContainerRef = useRef(null)

  const [recipes, setRecipes] = useState(dummy)

  // processIconAndColor(recipes)

  useEffect(() => {
    const scrollHorizontally = (e) => {
      e = window.event || e;
      const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
      cardContainerRef.current.scrollLeft -= delta * 30;
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
  });

  return (
    <Container>
      <HeaderContainer>
        <SectionHeader>
          <h2>인기 레시피</h2>
          <h4>요즘 인기 있는 에어프라이어 요리</h4>
        </SectionHeader>
      </HeaderContainer>
      <CardContainer ref={cardContainerRef}>
        {recipes.map((recipe) => (
          <TrendCard
            id={recipe.id}
            key={recipe.name}
            name={recipe.name}
            iconSrc={recipe.iconSrc}
            color={recipe.color}
            author={recipe.author}
            like={recipe.like}
            comment={recipe.comment}
          />
        ))}
      </CardContainer>
    </Container>
  );
};

export default TrendCards;
