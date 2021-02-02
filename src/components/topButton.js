import React from 'react'
import styled from 'styled-components'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Button = styled.div`
  position: fixed;
  z-index: 1;
  width: 50px;
  height: 50px;
  bottom: 30px;
  right: 30px;
`

const Link = styled(AnchorLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 30px;
  background: var(--button-color);
  filter: opacity(50%);
  transition: .3s;

  &:hover {
    filter: opacity(100%);
  }
`

export default function TopButton() {
  return (
    <Button>
      <Link to="/#inicio"><AiOutlineArrowUp size="25"/></Link>
    </Button>
  )
}
