import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'
import { Margin } from '../styles/margin'
import Bg from '../../assets/images/banner2.jpg'

const About = () => {
  const { andreImage } = useStaticQuery(
    graphql`
      query {
        andreImage: file(relativePath: { eq: "andre-image.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid 
            }
          }
        }
      }
    `
  )

  return (
    <S.AboutContainer id="sobre">
      
        <S.AboutBg src={Bg} />

          <Margin>
            <S.ContentWrapper>
                <S.Title>Quem sou eu</S.Title>

                <S.ContentInfo>
                  <S.ContentText>
                    <S.Name>André Ferreira</S.Name>
                    <S.Prof>Desenvolvedor Web</S.Prof>
                    <S.Description>
                      Trabalho com desenvolvimento web desde 2015, em minha jornada como
                      desenvolvedor já tive a oportunidade de trabalhar em grandes empresas.<br/><br/>

                      Meu principal objetivo na Webnarte é fazer o que amo e ajudar pessoas
                       alcançarem seus objetivos na internet.<br/><br/>
                      
                      Utilizo as tecnologias mais modernas existentes, sempre pensando em
                      performance, segurança e com foco total nos resultados. E aí, vamos trabalhar juntos?
                    </S.Description>
                  </S.ContentText>

                  <S.ContentImage>
                    <S.Image fluid={andreImage.childImageSharp.fluid} />
                  </S.ContentImage>
                </S.ContentInfo>

            </S.ContentWrapper>
          </Margin>

    </S.AboutContainer>
  )
}

export default About
