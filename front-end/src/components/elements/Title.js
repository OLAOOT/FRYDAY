import React from "react";
import styled from "styled-components";

import Icon from "./Icon";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & > h2 {
    margin-left: 16px;
    font-size: 20px;
    font-weight: ${(props) => props.theme.font.black};
    color: ${(props) => props.theme.color.black};
  }
`;

const Title = ({
  name,
  iconSrc,
  color,
}) => {
  return (
    <Container>
      <Icon src={iconSrc} background={color} />
      <h2>{name}</h2>
    </Container>
  );
};

export default Title