import React from 'react'
import * as S from './styled'
import { Margin } from '../styles/margin'
import Items from './content'
import Icons from './icons'

const Services = () => {
  return (
    <S.ServicesContainer id="servicos">
      <Margin>
        <S.ContentWrapper>
          <S.MainTitle>Serviços</S.MainTitle>
          <S.MainDescription>"bem começado, metade feito!".<br/>- Aristóteles</S.MainDescription>

          <S.ServicosContainer>
              {Items.map((item, i) => {
                const Icon = Icons[item.icon]
                return (
                  <S.ServicosItem key={i}>
                    <S.IconWrapper>
                      <Icon style={{fill: 'blue', marginBottom: '20px'}} size={50} />
                    </S.IconWrapper>
                    <S.ServicosTitle>{item.title}</S.ServicosTitle>
                    <S.ServicosDescription>{item.description}</S.ServicosDescription>
                  </S.ServicosItem>
                )
              })}
          </S.ServicosContainer>
        </S.ContentWrapper>
      </Margin>
    </S.ServicesContainer>
  )
}

export default Services
