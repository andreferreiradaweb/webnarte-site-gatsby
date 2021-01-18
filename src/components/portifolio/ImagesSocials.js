import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as S from './styled'

const ImagesSocials = () => {
  const { allFile: { edges } } = useStaticQuery(graphql`
    query SocialsQuery {
      allFile(filter: {relativeDirectory: {eq: "socials"}}) {
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

export default ImagesSocials