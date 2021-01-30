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
                    <S.Prof>UI/UX Designer | Programador</S.Prof>
                    <S.Description>
                      Trabalho com TI desde 2011, já trabalhei em
                      algumas Agências de Marketing Digital, e hoje atuo 
                      como Programador e Analista de Marketing Digital.<br/><br/>

                      Meu principal objetivo na Webnarte é fazer o que amo e ajudar pessoas a
                      venderem ou alcançar potenciais clientes através da internet.<br/><br/>
                      
                      Utilizo as tecnologias mais modernas existentes, sempre pensando em
                      performance, segurança e boas práticas.
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
