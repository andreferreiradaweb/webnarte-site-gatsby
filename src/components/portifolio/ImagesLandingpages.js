import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as S from './styled'

const ImagesLandingpages = () => {
  const { allFile: { edges } } = useStaticQuery(graphql`
    query SocialsQuery {
      allFile(filter: {relativeDirectory: {eq: "landingpages"}}) {
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

export default ImagesLandingpages