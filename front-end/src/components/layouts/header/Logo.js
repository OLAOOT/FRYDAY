import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLogo = styled.div`
  color: ${props => props.theme.color[props.color] || props.theme.color.black};
  font-size: 48px;
  font-weight: ${({ theme }) => theme.font.bold};
`
const Logo = ({ color }) => (
  <Link to="/" style={{textDecoration: 'none'}}>
    <StyledLogo color={color}>
      FRYDAY
    </StyledLogo>
  </Link>
)

export default Logo