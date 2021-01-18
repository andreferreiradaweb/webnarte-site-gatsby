import styled from 'styled-components'

export const Margin = styled.div`
  max-width: 1144px;
  margin: 0 auto;
  padding: 80px 10px;
  box-sizing: border-box;

  @media screen and (max-width: 442px) {
    padding: 40px 10px;
  }
  @media screen and (max-width: 320px) {
    padding: 30px 10px;
  }
`