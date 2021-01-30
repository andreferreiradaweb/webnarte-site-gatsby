import React, { useState, useContext } from 'react'
import * as S from './styled'
import { menuData } from '../header/data/menuData'
import { AiOutlineClose } from 'react-icons/ai'
import { ValueContext } from './createContext'

const Navbar = () => {
  const [ hover, setHover ] = useState(false)
  const { value, setValue } = useContext(ValueContext)
  
  const handleMouseEnter = () => {
    setHover(true)
  }
  const handleMouseLeave = () => {
    setHover(false)
  }

  const handleClick = () => {
    setValue(!value)
  }
  

  return (
    
      <S.ContentWrapper>
        <S.ContentNav>
          <S.List>
          <S.Item><S.StyledLink onClick={handleClick}><AiOutlineClose 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          size='40'
          style={{
            fill: hover ? 'var(--blue-light)' : 'var(--button-color)',
            cursor: 'pointer',
            }}
          /></S.StyledLink></S.Item>
          {menuData.map((item, index) => (
            <S.Item onClick={handleClick} key={index}>
              <S.StyledLink to={item.link}>{item.title}</S.StyledLink>
            </S.Item>
          ))}
          </S.List>
        </S.ContentNav>
      </S.ContentWrapper>
  )
}

export default Navbar
