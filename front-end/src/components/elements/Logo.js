import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLogo = styled.div`
  color: ${props => props.theme.color[props.color] || props.theme.color.primary};
  font-size: 48px;
  font-family: ${({ theme }) => theme.font.medium};
`
const Logo = ({ color }) => (
  <Link to="/" style={{textDecoration: 'none'}}>
    <StyledLogo color={color}>
      logo
    </StyledLogo>
  </Link>
)


export default Logo