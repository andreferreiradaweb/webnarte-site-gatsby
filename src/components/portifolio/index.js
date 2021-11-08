import React, { useState } from 'react'
import * as S from './styled'
import ImagesInstitucionais from './ImagesInstitucionais'
import ImagesLandingpages from './ImagesLandingpages'
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
      if(tag === 'landingpages') {
        return <>
          <ImagesLandingpages />
        </>
      } else if(tag === 'institucionais') {
        return <ImagesInstitucionais />
      }
      return <>
        <ImagesInstitucionais />
        <ImagesLandingpages />
      </>
    }

  return (
    <S.PortifolioContainer id="portifolio">
      <Margin>
        <S.ContentWrapper>

          <S.HeaderWrapper>
            <S.TitleGroup>
              <S.Title>Portifólio</S.Title>
              <S.Description>Veja alguns de nossos trabalhos</S.Description>
            </S.TitleGroup>

            <S.NavGroup>
              <S.NavButton onClick={() => handleClick('all')} className={tag === 'all' ? 'active' : ''}>Mostrar tudo</S.NavButton>
              <S.NavButton onClick={() => handleClick('institucionais')} className={tag === 'institucionais' ? 'active' : ''}>Institucionais</S.NavButton>
              <S.NavButton onClick={() => handleClick('landingpages')} className={tag === 'landingpages' ? 'active' : ''}>Landing Pages</S.NavButton>
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
