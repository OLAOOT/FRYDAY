import styled from 'styled-components';

const Button = styled.button`
  width: ${props => props.width || '100%'};
  height: 52px;
  background: ${(props) => props.theme.color[props.background] || props.theme.color.lightbrown};
  color: ${(props) => props.theme.color[props.color] || 'black'};
  border: none;
  border-radius: 32px;
  box-shadow: ${({ theme }) => theme.shadow.bottom};
  font-size: 20px;
  font-family: ${({ theme }) => theme.font.light};
  cursor: ${({ background }) => background === 'headerbrown' ? 'arrow' : 'pointer'};
  &:focus {
    outline: none;
  }
`

export default Button
