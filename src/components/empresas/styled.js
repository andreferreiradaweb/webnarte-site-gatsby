import styled from 'styled-components'
import Img from 'gatsby-image'

export const ContentWrapper = styled.div`
  max-width: 100%;
  height: auto;
  position: relative; 
  
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  color: var(--font-color);
  font-size: 30px;

  @media screen and (max-width: 1024px) {
    font-size: 50px;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    font-size: 45px;
  }
  @media screen and (max-width: 442px) {
    font-size: 35px;
  }
  @media screen and (max-width: 320px) {
    font-size: 30px;
  }
`

export const ContentImages = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`

export const Images = styled(Img)`
  margin: 20px;
  flex: 1 1 200px;
  border-radius:10px;
  max-width: 200px;
  height: auto;
  cursor: pointer;
  transition: .3s ease;

  &:hover {
    transition: .3s ease;
    filter: sepia(1) hue-rotate(130deg) contrast(130%);
    -webkit-filter: sepia(1) hue-rotate(130deg) contrast(90%);
  }
`