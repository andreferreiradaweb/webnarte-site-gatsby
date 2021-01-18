import React from "react"
import Header from "./header/index"
import { GlobalStyle } from './styles/GlobalStyle'

const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </>
  )

}

export default Layout
