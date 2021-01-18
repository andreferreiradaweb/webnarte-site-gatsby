import React from 'react'
import * as S from './styled'
import { Margin } from '../styles/margin'

const Footer = () => {
  return (
    <S.ContentWrapper>
      <Margin>
        <S.Content>
          <S.ContentColumn>
            <S.ColumnTitle>This is a title</S.ColumnTitle>
            <S.ColumnItem>item 1</S.ColumnItem>
            <S.ColumnItem>item 2</S.ColumnItem>
            <S.ColumnItem>item 3</S.ColumnItem>
            <S.ColumnItem>item 4</S.ColumnItem>
          </S.ContentColumn>

          <S.ContentColumn>
            <S.ColumnTitle>This is a title</S.ColumnTitle>
            <S.ColumnItem>item 1</S.ColumnItem>
            <S.ColumnItem>item 2</S.ColumnItem>
            <S.ColumnItem>item 3</S.ColumnItem>
            <S.ColumnItem>item 4</S.ColumnItem>
          </S.ContentColumn>

          <S.ContentColumn>
            <S.ColumnTitle>This is a title</S.ColumnTitle>
            <S.ColumnItem>item 1</S.ColumnItem>
            <S.ColumnItem>item 2</S.ColumnItem>
            <S.ColumnItem>item 3</S.ColumnItem>
            <S.ColumnItem>item 4</S.ColumnItem>
          </S.ContentColumn>

          <S.ContentColumn>
            <S.ColumnTitle>This is a title</S.ColumnTitle>
            <S.ColumnItem>item 1</S.ColumnItem>
            <S.ColumnItem>item 2</S.ColumnItem>
            <S.ColumnItem>item 3</S.ColumnItem>
            <S.ColumnItem>item 4</S.ColumnItem>
          </S.ContentColumn>
        </S.Content>
      </Margin>
    </S.ContentWrapper>
  )
}

export default Footer
