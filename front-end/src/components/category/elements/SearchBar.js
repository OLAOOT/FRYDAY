import React from 'react'
import styled from 'styled-components'

  const Input = styled.input`
    border: 8px solid ${props => props.theme.color[props.color]};
    border-radius: 12px;
    height: 128px;
    font-size: 20px;
    color: ${props => props.theme.color[props.color]};
    padding-left: 8px;
  `

const SearchBar = ({ color, filter, setFilter }) => {
  return (
    <Input color={color} value={filter} onChange={e => setFilter(e.target.value)} placeholder='검색' />
  )
}

export default SearchBar