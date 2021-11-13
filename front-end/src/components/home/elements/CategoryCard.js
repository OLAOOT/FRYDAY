import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


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
	&:active, &:focus {
	  background-color: ${(props) => props.theme.background[props.focused]};
	}
`

const CategoryCard = ({ children, color, href }) => {
	
	const [currentBG, setCurrentBG] = useState(null)
	
	return (
		<Link to={href}>
			<Container color={color} background={currentBG} focused={color}>
				{children}
			</Container>
		</Link>
	)
}

export default CategoryCard;