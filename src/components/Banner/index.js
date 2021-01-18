import React from 'react'
import * as S from './styled'
import { Button } from '../button'
import Bg from '../../assets/images/banner.jpg'

const Hero = () => {
  return (
    <S.HeroContainer>
        <S.HeroBg>
          <S.BannerBg src={Bg}/>
        </S.HeroBg>
        <S.HeroContent>
          <S.HeroItems>
            <S.HeroH1>Deseja aumentar <br/> suas vendas?</S.HeroH1>
            <S.HeroP>Então não perca tempo, invista em Marketing Digital<br/>
              e aumente o faturamento  do seu negócio</S.HeroP>
            <Button primary="true" big="true" round="true" to="#servicos">Saiba mais</Button>
          </S.HeroItems>
        </S.HeroContent>
    </S.HeroContainer>
  )
}


export default Hero


