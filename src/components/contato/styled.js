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
`

export const Desc = styled.p`
  color: var(--font-color);
`

export const ContentButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
`

export const Strong = styled.div`
  margin: 0 20px;
  color: var(--blue-dark);
  font-size: 20px;
  font-weight: bold;
  font-family: var(--font);
`

