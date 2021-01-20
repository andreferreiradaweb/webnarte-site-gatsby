import styled from 'styled-components'
import Img from 'gatsby-image'


export const AboutContainer = styled.div`
  max-width: 100%;
  height: auto;
  position: relative; 
`

export const AboutBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
`

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  text-align: center;
  color: var(--white);

  @media screen and (max-width: 1024px) {
    font-size: 50px;
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

export const ContentInfo = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;

  @media screen and (max-width: 442px) {
    margin-top: 50px;
  }
`

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 350px;

  @media screen and (max-width: 442px) {
    margin-bottom: 50px;
  }
`

export const Name = styled.strong`
  font-family: var(--font);
  font-weight: bold;
`

export const Prof = styled.span`
  font-style: italic;
  font-size: 14px;
  opacity: 0.8;
`

export const Description = styled.p`
  margin: 20px 0;
`

export const ContentImage = styled.div`
  width: 350px;
`
export const Image = styled(Img)`
  max-width: 100%;
  height: auto;
  display: block;
`