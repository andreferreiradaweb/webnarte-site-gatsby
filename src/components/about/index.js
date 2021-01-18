import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'
import { Margin } from '../styles/margin'
import { Button } from '../button'
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
    <S.AboutContainer>
      
        <S.AboutBg src={Bg} />

          <Margin>
            <S.ContentWrapper>
                <S.Title>Quem sou eu</S.Title>

                <S.ContentInfo>
                  <S.ContentText>
                    <S.Name>André Ferreira</S.Name>
                    <S.Prof>UI/UX Designer | Programador</S.Prof>
                    <S.Description>rewgwg gregerg fgfhjfg f h rth trhtrhrthrthrt rthrthrthrt hrthrthrth rt hrt hrterge rge rgergerge ger gerg3rg 34 4g34 3 43 34t43</S.Description>
                    <Button primary="true" fixWidth="true" round="true" to="#servicos">Saiba mais</Button>
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
