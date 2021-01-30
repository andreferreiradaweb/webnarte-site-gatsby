import React, { useState } from "react"
import { menuData } from './data/menuData'
import * as S from './styled'
import { ValueContext } from '../navbar/createContext'
import { Button } from '../button'
import Logo from '../../assets/images/logo-vertical-site-branca.png'
import Navbar from "../navbar"

const Header = () => {
  const [ value, setValue ] = useState(false)

  const handleClick = () => setValue(!value)

  return (
    <ValueContext.Provider value={{ value, setValue }}>
    {value ? <Navbar /> : ''}
    <S.Nav>
      <S.NavLink to="/" id="home" bgBlueOff="true"><S.NavLogo src={Logo} /></S.NavLink>
      <S.Bars onClick={handleClick}/>
      <S.NavMenu>
        {menuData.map((item, index) => (
          <S.NavLinkAnchor to={item.link} key={index} title={item.title} />
        ))}
      </S.NavMenu>
      <S.NavBtn>
        <Button primary="true" round="true" to="https://wa.me/5585997139967" target="_new">
          Whatsapp
        </Button>
      </S.NavBtn>
    </S.Nav>
    </ValueContext.Provider>
  )
}
    
  


export default Header