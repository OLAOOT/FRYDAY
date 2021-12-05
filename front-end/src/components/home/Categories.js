import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import SectionHeader from "./elements/SectionHeader";
import CategoryCard from "./elements/CategoryCard";
import Icon from "../elements/Icon";
import Button from '../elements/Button'
import { LoginContext } from '../../App'

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


const Categories = () => {
  
  const { ID } = useContext(LoginContext)
  const navigate = useNavigate()

  const onClickProposeRecipeButton = () => {
    if (!ID) {
      alert('로그인 후 이용 가능합니다.')
    } else {
      navigate('/write')
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <SectionHeader>
          <h2>카테고리</h2>
          <h4>어떤걸 만들어볼까?</h4>
        </SectionHeader>
        <Button width="200px" background="headerbrown" onClick={onClickProposeRecipeButton}>
          레시피 등록하기
        </Button>
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
