import React from 'react'
import styled from 'styled-components'
import Banner from '../components/home/Banner'
import Categories from '../components/home/Categories'
import TrendCards from '../components/home/TrendCards'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default function Home() {
  return (
    <>
      <Banner />
      <Container>
        <Categories />
        <TrendCards />
      </Container>
    </>
  )
}