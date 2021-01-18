import styled from 'styled-components'

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
`