import styled from 'styled-components'
import Img from 'gatsby-image'

export const PortifolioContainer = styled.div`
  background: #fff;
  width: 100%;
  height: auto;
  position: relative;
`

export const ContentWrapper = styled.div`
`

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
`

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  color: var(--blue-dark);
`

export const Description = styled.p`
  color: var(--font-color);
`

export const NavGroup = styled.div`

`

export const NavButton = styled.button`
  cursor: pointer;
  color: var(--white);
  padding: 15px;
  border: none;
  background: var(--blue-light);
  transition: .3s all;

  &.active {
    background: var(--button-color) !important;
  }

  &:hover {
    background: var(--button-color);
    transition: .3s all;

  
}

  :nth-child(1) {
    border-radius: 10px 0 0 10px;
  }

  :nth-child(3) {
    border-radius: 0 10px 10px 0;
  }
`

export const ImagesGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`

export const Images = styled(Img)`
  margin: 20px;
  flex: 1 1 270px;
  border-radius:10px;
  max-width: 300px;
  height: auto;
`

