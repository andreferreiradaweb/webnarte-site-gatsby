import React from 'react'
import * as S from './styled'
import { Margin } from '../styles/margin'
import { useStaticQuery, graphql } from 'gatsby'

const Empresas = () => {

  const { allFile: { edges } } = useStaticQuery(graphql`
    query EmpresasQuery {
      allFile(filter: {relativeDirectory: {eq: "empresas"}}) {
        edges {
          node {
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  return (
    <S.ContentWrapper>
      <Margin>
        <S.Content>
          <S.Title>Empresas que confiam em nosso trabalho</S.Title>
          <S.ContentImages>
          {edges.map((image, index) => (
            <S.Images key={index} fixed={image.node.childImageSharp.fixed} />  
          ))}
          </S.ContentImages>
        </S.Content>
      </Margin>
    </S.ContentWrapper>
  )
}

export default Empresas
