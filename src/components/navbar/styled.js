import styled, { keyframes } from 'styled-components'
import { slideInDown } from 'react-animations';
import { AnchorLink } from "gatsby-plugin-anchor-links"

const bounceAnimation = keyframes`${slideInDown}`;

export const ContentWrapper = styled.div`
  animation: 500ms ${bounceAnimation};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transition: .5s all;
  z-index: 999;
  width: 100%;
  height: 100vh;
  background: var(--white);
`

export const ContentNav = styled.nav``

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Item = styled.li`
  margin: 15px 0;
`

export const StyledClose = styled.a`
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  color: var(--button-color);
  font-size: 20px;
  text-decoration: none;

  &:hover {
    color: var(--blue-light);
  }
`

export const StyledLink = styled(AnchorLink)`
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  color: var(--button-color);
  font-size: 20px;
  text-decoration: none;

  &:hover {
    color: var(--blue-light);
  }
`
