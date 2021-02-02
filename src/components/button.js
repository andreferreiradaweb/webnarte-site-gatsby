import styled from 'styled-components'
import { Link } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links"

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
  text-align: center;
  min-width: 100px;
  width: ${({ fixWidth }) => (fixWidth ? `${fixWidth}` : '')};
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? '10px' : 'none')};

  @media screen and (max-width: 442px) {
    font-size: 14px;
    padding: 10px;
  }

  &:hover {
    background: ${({primary}) => (primary ? '#1c0051' : '#5bb8ea')};
    transform: translateY(-5px);
  }
`

export const ButtonA = styled.a`
  background: ${({primary}) => (primary ?  '#5bb8ea' : '#2222ff')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
  color: #fff;
  font-family: 'montserrat', sans-serif;
  font-weight: bold;
  font-size: ${({ big }) => (big ? '20px' : '16px')};
  outline: none;
  border: none;
  text-align: center;
  min-width: 100px;
  width: ${({ fixWidth }) => (fixWidth ? `${fixWidth}` : '')};
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? '10px' : 'none')};

  @media screen and (max-width: 442px) {
    font-size: 14px;
    padding: 10px;
  }

  &:hover {
    background: ${({primary}) => (primary ? '#1c0051' : '#5bb8ea')};
    transform: translateY(-5px);
  }
`

export const ButtonAnchor = styled(AnchorLink)`
  background: ${({primary}) => (primary ?  '#5bb8ea' : '#2222ff')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
  color: #fff;
  font-family: 'montserrat', sans-serif;
  font-weight: bold;
  font-size: ${({ big }) => (big ? '20px' : '16px')};
  outline: none;
  border: none;
  text-align: center;
  min-width: 100px;
  width: ${({ fixWidth }) => (fixWidth ? `${fixWidth}` : '')};
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? '10px' : 'none')};

  @media screen and (max-width: 442px) {
    font-size: 14px;
    padding: 10px;
  }

  &:hover {
    background: ${({primary}) => (primary ? '#1c0051' : '#5bb8ea')};
    transform: translateY(-5px);
  }
`