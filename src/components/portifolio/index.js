import React, { useState } from 'react'
import * as S from './styled'
import ImagesSites from './ImagesSites'
import ImagesSocials from './ImagesSocials'
import { Margin } from '../styles/margin'

const Portifolio = () => {

  // const { allFile: { edges } } = useStaticQuery(graphql`
  //   query MyQuery {
  //     allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, 
  //       name: {in: ["site1", "site2", "site3", "site4", "social1", "social2"]}}) {
  //       edges {
  //         node {
  //           name
  //           childImageSharp {
  //             fluid {
  //               ...GatsbyImageSharpFluid
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const [tag, setTag] = useState('all')

    const handleClick = (value) => {
      setTag(value)
    }

    const filtredImages = () => {
      if(tag === 'social') {
        return <>
          <ImagesSocials />
        </>
      } else if(tag === 'site') {
        return <ImagesSites />
      }
      return <>
        <ImagesSites />
        <ImagesSocials />
      </>
    }

  return (
    <S.PortifolioContainer>
      <Margin>
        <S.ContentWrapper>

          <S.HeaderWrapper>
            <S.TitleGroup>
              <S.Title>Portifólio</S.Title>
              <S.Description>Some description you can see here right now</S.Description>
            </S.TitleGroup>

            <S.NavGroup>
              <S.NavButton onClick={() => handleClick('all')} className={tag === 'all' ? 'active' : ''}>Mostrar tudo</S.NavButton>
              <S.NavButton onClick={() => handleClick('site')} className={tag === 'site' ? 'active' : ''}>Sites</S.NavButton>
              <S.NavButton onClick={() => handleClick('social')} className={tag === 'social' ? 'active' : ''}>Redes Sociais</S.NavButton>
            </S.NavGroup>
          </S.HeaderWrapper>
          
          <S.ImagesGroup>
            {filtredImages()}
          </S.ImagesGroup>

        </S.ContentWrapper>
      </Margin>
    </S.PortifolioContainer>
  )
}

export default Portifolio
