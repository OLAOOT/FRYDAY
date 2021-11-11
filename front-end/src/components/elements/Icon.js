import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  ${(props) =>
    props.background && `
		background-color: ${props.theme.background[props.background]};
  `}
`;

const Icon = ({ src, background }) => {
  return (
    <Container background={background}>
      <img src={src} alt="icon" />
    </Container>
  );
};

export default Icon