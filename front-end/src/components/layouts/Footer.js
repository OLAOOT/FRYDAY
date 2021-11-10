// import * as React from "react";
// import styled from 'styled-components'

// import Icon from '../elements/Icon'

// const Container = styled.div`
// 	position: absolute;
// 	bottom: 0;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: flex-start;
// 	align-items: center;
// 	width: 100%;
// 	height: 141px;
// 	background-color: ${props => props.theme.color.footerbrown};
// 	padding: 16px;
// 	& > div {
// 		color: ${props => props.theme.color.brown};
// 		font-size: 10px;
// 		font-weight: ${props => props.theme.font.light};
// 	}
// 	@media ${({theme}) => theme.media.tablet} {
// 		justify-content: center;
// 		& > div {
// 			font-size: 16px;
// 			font-weight: ${props => props.theme.font.bold};
// 		}
// 	}
// `
// const MobileContainer = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: flex-start;
// 	align-items: center;
// 	width: 100%;
	
// 	@media ${({theme}) => theme.media.tablet} {
// 		display: none;
// 	}
// `

// const TextContainer = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	margin: 8px 0 16px;
// 	& > h5:first-child {
// 		color: ${props => props.theme.color.brown};
// 		font-size: 14px;
// 		font-weight: ${props => props.theme.font.light};
// 		margin-bottom: 3px;
// 		& + h5 {
// 			color: ${props => props.theme.color.black};
// 			font-size: 14px;
// 			font-weight: ${props => props.theme.font.bold};
// 		}
// 	}
// `

// const Footer: React.FunctionComponent = () => {
// 	return (
// 		<Container>
// 			<MobileContainer>
// 				<Icon src="/symbol.svg" />
// 				<TextContainer>
// 					<h5>에어프라이어 쓸 땐?</h5>
// 					<h5>프라이데이</h5>
// 				</TextContainer>
// 			</MobileContainer>
// 			<div>2020 FRYDAY ⓒ All Rights Reserved</div>
// 		</Container>
//   	);
// };

// export default Footer;