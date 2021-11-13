import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	${reset}
	@font-face {
		font-family: 'SpoqaHanSans-kr';
		src: url('//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css');
	}
	
	* {
		box-sizing: border-box;
		font-family: 'SpoqaHanSans-kr', sans-serif;
	}
	body {
		height: 100%;
		background-color: #fdfdfd;
		font-family: 'SpoqaHanSans-kr', sans-serif;
		& > * {
			height: 100%;
		}
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	input, button {
		background-color: transparent;
		border: none;
		outline: none;
	}
`;

export default GlobalStyle;