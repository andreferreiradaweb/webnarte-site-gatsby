import React from 'react'
import * as S from './styled'
import './styles.css'
import Carousel from "react-elastic-carousel"
import Bg from '../../assets/images/banner3.jpg'
import { Margin } from '../styles/margin'
import { Testemonials } from './data'
import { BsPeopleCircle } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'

const Depoimento = () => {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
  ];

  return (
    <S.AboutContainer>
      <S.AboutBg src={Bg}/>
      <Margin>
        <S.ContentWrapper>
          <S.ContentLeft>
            <Carousel breakPoints={breakPoints}>
              {Testemonials.map(testemonial => (
                <S.Item>
                  <S.ItemTestemonial>{testemonial.testemonial}</S.ItemTestemonial>
                  <S.ItemAuthorGroup>
                    <S.ItemAuthorIcon><BsPeopleCircle style={{fill: 'blue', marginRight: '15px'}} size={50} /></S.ItemAuthorIcon>
                    <S.ItemAuthorTextGroup>
                      <S.ItemAuthorName>{testemonial.author}</S.ItemAuthorName>
                      <S.ItemAuthorProfession>{testemonial.Profession}</S.ItemAuthorProfession>
                    </S.ItemAuthorTextGroup>
                  </S.ItemAuthorGroup>
                </S.Item>
              ))}
            </Carousel>
          </S.ContentLeft>
          <S.ContentRight>
            <S.Title>Depoimentos</S.Title>
            <S.Desc>Estes são os depoimentos de pessoas
            que confiam em nosso trabalho, e apoiam nossas
            qualidade que são:</S.Desc>
            <S.Ul>
              <S.Li><AiFillStar style={{ marginRight: '10px' }}/>Qualidade no atendimento</S.Li>
              <S.Li><AiFillStar style={{ marginRight: '10px' }}/>Qualidade nos serviços</S.Li>
              <S.Li><AiFillStar style={{ marginRight: '10px' }}/>Performance nos sites</S.Li>
              <S.Li><AiFillStar style={{ marginRight: '10px' }}/>Desempenho nas campanhas</S.Li>
              <S.Li><AiFillStar style={{ marginRight: '10px' }}/>Suporte rápido</S.Li>
            </S.Ul>
          </S.ContentRight>
        </S.ContentWrapper>
      </Margin>
    </S.AboutContainer>
  )
}

export default Depoimento
