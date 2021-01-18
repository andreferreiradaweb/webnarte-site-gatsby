import styled from 'styled-components'

export const ServicesContainer = styled.div`
  background: var(--white);
  max-width: 100%;
  height: auto;
  position: relative;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MainTitle = styled.h1`
  color: var(--blue-dark);
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
    font-size: 60px;
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
export const MainDescription = styled.p`
  color: var(--font-color);
  text-align: center;
`

export const ServicosContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  width: 100%;
  padding: 80px;
  background: #fff;
  border-radius: 30px;
  box-shadow: 0px 7px 27px -2px rgba(0,0,0,0.30);

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    width: 85%;
    padding: 40px;
  }
  @media screen and (max-width: 320px) {
    width: 90%;
    padding: 20px;
  }
`

export const ServicosItem = styled.div`
  display: flex;
  flex: 1 1 250px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  text-align: center;
  margin: 20px;
`

export const ServicosTitle = styled.strong`
  font-family: var(--font);
  font-weight: bold;
  color: var(--blue-dark);
`

export const ServicosDescription = styled.p`
margin-top: 10px;
  color: var(--font-color);
`

export const IconWrapper = styled.div`

`