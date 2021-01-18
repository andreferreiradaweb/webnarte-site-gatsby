import styled from 'styled-components'
import { Link } from "gatsby"
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

export const NavLink = styled(Link)`
  color: var(--white);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  border-radius: 15px;
  transition: .5s all;
  cursor: pointer;

  &:hover {
    background: ${({ bgBlueOff }) => ( bgBlueOff ? '' : 'var(--button-color)')};
    transition: .3s all;
    transform: translateY(-5px);
  }
`

export const NavLogo = styled.img`
  width: 85px;
`

export const Bars = styled(FaBars)`
  color: #fff;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
  }
`

export const NavMenu = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`