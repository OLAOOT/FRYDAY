import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import SectionHeader from "./elements/SectionHeader";
import CategoryCard from "./elements/CategoryCard";
import Icon from "../elements/Icon";

const Container = styled.div`
	margin: 0 0 22px;
	display: flex;
	flex-direction: column;
	align-items: center;
  width: 1024px;
	max-width: 1024px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

const CardOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1024px;
  margin: 16px 0 32px;
`;

const ProposeRecipeButton = styled.button`
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: ${(props) => props.theme.color.brown};
  font-size: 18px;
  margin-left: 16px;
  white-space: nowrap !important;
`;

const Categories = () => {
  
  const navigate = useNavigate()

  const onClickProposeRecipeButton = () => {
    // 로그인 했다면
    navigate('/write')
  };

  return (
    <Container>
      <HeaderContainer>
        <SectionHeader>
          <h2>카테고리</h2>
          <h4>어떤걸 만들어볼까?</h4>
        </SectionHeader>
        <ProposeRecipeButton onClick={onClickProposeRecipeButton}>
          레시피 등록하기
        </ProposeRecipeButton>
      </HeaderContainer>
      <CardOuterContainer>
        <CardContainer>
          <CategoryCard color="yellow" href="/category?id=bread">
            <Icon src="/icon-toast.svg" background="yellow" />
            <h4>빵 · 토스트</h4>
          </CategoryCard>
          <CategoryCard color="orange" href="/category?id=snack">
            <Icon src="/icon-cookie.svg" background="orange" />
            <h4>과자 · 스낵</h4>
          </CategoryCard>
          <CategoryCard color="green" href="/category?id=vegetable">
            <Icon src="/icon-carrot.svg" background="green" />
            <h4>야채 · 샐러드</h4>
          </CategoryCard>
          <CategoryCard color="blue" href="/category?id=frozen">
            <Icon src="/icon-fridge.svg" background="blue" />
            <h4>냉동 · 냉장</h4>
          </CategoryCard>
          <CategoryCard color="red" href="/category?id=meat">
            <Icon src="/icon-steak.svg" background="red" />
            <h4>고기 · 육류</h4>
          </CategoryCard>
          <CategoryCard color="pink" href="/category?id=chicken">
            <Icon src="/icon-chicken.svg" background="pink" />
            <h4>닭 · 해산물</h4>
          </CategoryCard>
        </CardContainer>
      </CardOuterContainer>
    </Container>
  );
};

export default Categories;
