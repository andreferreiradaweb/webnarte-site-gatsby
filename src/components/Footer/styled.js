import styled from 'styled-components'
import { AnchorLink } from "gatsby-plugin-anchor-links"

export const ContentWrapper = styled.div`
  max-width: 100%;
  height: auto;
  position: relative; 
  background: var(--blue-light);
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const ContentColumn = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  flex:1 1 250px;
  align-items: center;
`

export const ColumnTitle = styled.strong`
  font-family: var(--font);
  font-weight: bold;
`

export const ColumnItem = styled.p`
  font-size: 13px;
  margin: 3px 0;
`

export const Link = styled(AnchorLink)`
  font-size: 13px;
  text-decoration: none;
  transition: .3s;

  &:hover {
    filter: brightness(70%);
  }
`