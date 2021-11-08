import React from 'react'
import * as S from './styled'
import { menuData } from '../header/data/menuData'
import { Margin } from '../styles/margin'

const Footer = () => {
  return (
    <S.ContentWrapper>
      <Margin>
        <S.Content>
          <S.ContentColumn>
            <S.ColumnTitle>Contatos</S.ColumnTitle>
            <S.ColumnItem>Whatsapp: (85) 9 9713-9967</S.ColumnItem>
            <S.ColumnItem>Celular: (85) 9 9713-9967</S.ColumnItem>
            <S.ColumnItem>E-mail: webnarte@gmail.com</S.ColumnItem>
          </S.ContentColumn>

          <S.ContentColumn>
            <S.ColumnTitle>Serviços</S.ColumnTitle>
            <S.ColumnItem>Sites</S.ColumnItem>
            <S.ColumnItem>Lojas Virtuais</S.ColumnItem>
            <S.ColumnItem>Sistemas web</S.ColumnItem>
            <S.ColumnItem>Gestão de tráfego</S.ColumnItem>
          </S.ContentColumn>

          <S.ContentColumn>
          <S.ColumnTitle>Navegação</S.ColumnTitle>
          {menuData.map((item, index) => (
            <S.ColumnItem><S.Link to={item.link} key={index} title={item.title} /></S.ColumnItem>
        ))}
          </S.ContentColumn>
        </S.Content>
      </Margin>
    </S.ContentWrapper>
  )
}

export default Footer
