import styled from 'styled-components'

const Input = styled.input`
  position: relative;
  width: 100%;
  height: 52px;
  border-radius: 32px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.default};
  font-size: 20px;
  font-family: ${({ theme }) => theme.font.light};
  padding-left: 16px;
  &:focus {
    outline: none;
  }
`;

export default Input