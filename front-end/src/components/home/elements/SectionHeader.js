import styled from 'styled-components'


const SectionHeader = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 16px;
	padding: 0 16px;
	& h2 {
		height: 36px;
		padding: 7px 0;
		font-size: 36px;
		font-weight: ${props => props.theme.font.black};
		color: ${props => props.theme.color.black};
		margin-bottom: 16px;
	}
	& h4 {
		height: 22px;
		padding: 4px 0;
		font-size: 24px;
		color: ${props => props.theme.color.brown};
	}
`

export default SectionHeader;