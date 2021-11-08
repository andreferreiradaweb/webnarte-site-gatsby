import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as S from './styled'

const ImagesInstitucionais = () => {
  const { allFile: { edges } } = useStaticQuery(graphql`
    query SitesQuery {
      allFile(filter: {relativeDirectory: {eq: "institucionais"}}) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      {edges.map((image, index) => (
        <S.Images key={index} fluid={image.node.childImageSharp.fluid} />  
      ))}
    </>
  )
}

export default ImagesInstitucionais
