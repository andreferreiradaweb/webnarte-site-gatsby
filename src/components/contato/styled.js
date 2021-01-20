import styled from 'styled-components'

export const ContainerBg = styled.div`
  max-width: 100%;
  background: var(--white);
  height: auto;
  position: relative; 
`

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  color: var(--blue-dark);

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

export const Desc = styled.p`
  color: var(--font-color);
`

export const ContentButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  width: 550px;

  @media screen and (max-width: 592px) {
    width: 100%;
    flex-direction: column;
  }
`

export const Number = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 592px) {
    margin-bottom: 10px;
  }
`

export const Button = styled.div`
  width: 250px
`

export const Strong = styled.div`
  margin: 0 20px;
  color: var(--blue-dark);
  font-size: 20px;
  font-weight: bold;
  font-family: var(--font);

  @media screen and (max-width: 442px) {
    font-size: 16px;
  }
`

