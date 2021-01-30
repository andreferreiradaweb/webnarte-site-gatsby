import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from '../components/Banner'
import Services from '../components/services'
import About from "../components/about"
import Portifolio from "../components/portifolio"
import Depoimento from "../components/depoimento"
import Empresas from "../components/empresas"
import Contato from "../components/contato"
import Footer from "../components/Footer"
import TopButton from '../components/topButton'

const IndexPage = () => (
  <Layout>
    <TopButton />
    <SEO title="Home" />
    <Banner />
    <Services />
    <About />
    <Portifolio />
    <Depoimento />
    <Empresas />
    <Contato />
    <Footer />
  </Layout>
)

export default IndexPage
