import styled from 'styled-components'


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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

export const ContentLeft = styled.div`
  margin-left: -5px;
  width: 40%;

  @media screen and (max-width: 870px) {
    width: 100%;
    margin: 0 150px;
  }
  @media screen and (max-width: 768px) {
    margin: 0 110px;
  }
  @media screen and (max-width: 658px) {
    margin: 0 50px;
  }
  @media screen and (max-width: 442px) {
    margin: 0 0;
  }
  @media screen and (max-width: 320px) {
    font-size: 30px;
  }
`

export const ContentRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 870px) {
    width: 100%;
  }
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  align-items: center;
  height: 350px;
  width: 100%;
  padding: 50px 30px;
  margin: 5px;
  background-color: var(--white);
  color: var(--font-color);
`

export const ItemTestemonial = styled.p`
  color: var(--font-color);
  text-align: center;
  height: auto;
  overflow: hidden;
`

export const ItemAuthorIcon = styled.div``

export const ItemAuthorGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`

export const ItemAuthorTextGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const ItemAuthorName = styled.strong`
  font-family: var(--font);
  font-weight: bold;
  color: var(--blue-light);
`

export const ItemAuthorProfession = styled.p`
  color: var(--font-color);
`

export const Title = styled.h1`
  font-size: 50px;

  @media screen and (max-width: 1024px) {
    font-size: 50px;
  }
  @media screen and (max-width: 870px) {
    margin-top: 50px;
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


export const Desc = styled.div`
  margin: 10px 0 30px;
  text-align: center;
`
export const Ul = styled.div``
export const Li = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`

