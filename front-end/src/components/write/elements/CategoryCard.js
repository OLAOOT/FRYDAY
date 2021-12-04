import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
	position: relative;
	overflow: hidden;
	cursor: pointer;
	-webkit-tap-highlight-color : transparent;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 16px;
	width: 275px;
	height: 90px;
	border-radius: 34px;
	${props => props.background && `background-color: ${props.theme.background[props.background]}`};
	box-shadow: ${props => props.theme.shadow.default};
	& > *:first-child {
		margin-left: 16px;
	}
	& > h4 {
		font-weight: ${props => props.theme.font.bold};
		color: ${props => props.theme.color[props.color]};
		margin-right: 16px;
		font-size: 26px;
	}
`

const CategoryCard = ({ children, active, color, category, setCategory }) => {
	
	return (
    <Container color={color} background={active && color} onClick={() => setCategory(category)}>
      {children}
    </Container>
	)
}

export default CategoryCard;