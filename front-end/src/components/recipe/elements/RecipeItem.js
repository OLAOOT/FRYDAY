import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px 32px;
  border-bottom: 2px solid ${(props) => props.theme.color.footerbrown};
	& > span {
		padding: 12px 4px 0 0;
    color: ${(props) => props.theme.color.brown};
    font-weight: ${(props) => props.theme.font.bold};
    font-size: 24px;
	}
  & > div {
		padding: 8px 0;
		line-height: 24px;
    color: ${(props) => props.theme.color.brown};
    font-weight: ${(props) => props.theme.font.bold};
    font-size: 24px;
  }
  & b {
    color: ${(props) => props.theme.color[props.color]};
  }
`;

const Step = ({ step }) =>
  step
    .split(/((?:\d+(?:분|도))|(?:\\(?:time|temp)\(\d+\)))/)
    .map((v) => (v.match(/\\time\(\d+\)/) ? v.match(/\d+/) + "분" : v))
    .map((v) => (v.match(/\\temp\(\d+\)/) ? v.match(/\d+/) + "도" : v))
    .map((v) =>
      v.match(/((?:\d+(?:분|도))|(?:\\(?:time|temp)\(\d+\)))/) ? (
        <span>
          <b>{v}</b>
        </span>
      ) : (
        <span>{v}</span>
      )
    );

const RecipeItem = ({
  step,
  index,
  color,
}) => {
  return (
    <Container color={color}>
      <div>
			  <span>{index}. </span>
        <Step step={step} />
      </div>
    </Container>
  );
};

export default RecipeItem;
