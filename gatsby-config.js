module.exports = {
  siteMetadata: {
    title: `Criação de site em fortaleza`,
    description: `Você que busca por criação de site em Fortaleza, crie uma plataforma bem planejada com um especialista e aumente o seu faturamento.`,
    author: `@andreferreiradaweb`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: 0,
        duration: 1000,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `socials`,
        path: `${__dirname}/src/assets/images/landingpages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sites`,
        path: `${__dirname}/src/assets/images/institucionais`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
