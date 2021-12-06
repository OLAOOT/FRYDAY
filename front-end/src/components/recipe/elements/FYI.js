import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding: 32px;
  background-color: ${props => props.theme.background['light' + props.color]};
  border-radius: 32px;
  box-shadow: ${props => props.theme.shadow.default};
  & > div {
    font-weight: ${(props) => props.theme.font.bold};
    font-size: 24px;
    color: ${(props) => props.theme.color.brown};
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  & > img {
    width: 400px;
  }
  margin-bottom: 32px;
`

const FYI = ({ fyi, color }) => {

  const [comment, image] = fyi ? fyi.split('\\img') : [null, null]

  return (
    <Container color={color}>
      {image && (
        <ImageContainer>
          <img alt=' ' src={`/images/${image}`} />
        </ImageContainer>
      )}
      <div>{fyi ? comment : '등록된 사진 및 코멘트가 없습니다.'}</div>
    </Container>
  )
}

export default FYI