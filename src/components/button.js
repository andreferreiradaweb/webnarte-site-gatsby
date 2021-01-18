import styled from 'styled-components'
import { Link } from 'gatsby'

export const Button = styled(Link)`
  background: ${({primary}) => (primary ?  '#5bb8ea' : '#2222ff')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
  color: #fff;
  font-family: 'montserrat', sans-serif;
  font-weight: bold;
  font-size: ${({ big }) => (big ? '20px' : '16px')};
  outline: none;
  border: none;
  min-width: 100px;
  width: ${({ fixWidth }) => (fixWidth ? '150px' : '')};
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? '10px' : 'none')};

  &:hover {
    background: ${({primary}) => (primary ? '#1c0051' : '#5bb8ea')};
    transform: translateY(-5px);
  }
`