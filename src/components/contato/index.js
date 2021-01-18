import React from 'react'
import { Margin } from '../styles/margin'
import * as S from './styled'
import { FaWhatsapp } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'
import { Button } from '../button'

const Contato = () => {
  return (
    <S.ContainerBg>
      <Margin>
        <S.ContentWrapper>

          <S.Title>Contatos</S.Title>
          <S.Desc>Entre em contato e solicite seu orçamento agora mesmo.</S.Desc>

          <S.ContentButton>
            <FaWhatsapp style={{fill: 'var(--blue-dark)', fontSize: '30px'}} />
            <S.Strong>(85) 9 97139967</S.Strong>
            <Button primary="true" round="true" to="#servicos">Enviar mensagem</Button>
          </S.ContentButton>

          <S.ContentButton>
            <BiPhoneCall style={{fill: 'var(--blue-dark)', fontSize: '30px'}} />
            <S.Strong>(85) 9 97139967</S.Strong>
            <Button primary="true" round="true" to="#servicos">Ligar</Button>
          </S.ContentButton>

          <S.ContentButton>
            <AiOutlineMail style={{fill: 'var(--blue-dark)', fontSize: '30px'}} />
            <S.Strong>webnarte@gmail.com</S.Strong>
            <Button primary="true" round="true" to="#servicos">Enviar E-mail</Button>
          </S.ContentButton>

        </S.ContentWrapper>
      </Margin>
    </S.ContainerBg>
  )
}

export default Contato
