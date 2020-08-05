/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    seoTitle: `Thanos Paravantis`,
    seoDescription: `A computer science student and passionate programmer, interested in web development, machine learning, software engineering.`,
    seoKeywords: `thanos paravanits, computer science, programming, web development, machine learning, development, software, backend, frontend`,
    seoUrl: `https://thanosparavantis.com`,
    seoTwitterUsername: `@thanosparavantis`,
    facebookLink: `https://www.facebook.com/thanosparavantis/`,
    twitterLink: `https://twitter.com/thparavantis`,
    linkedinLink: `https://www.linkedin.com/in/thanosparavantis`,
    githubLink: `https://github.com/thanosparavantis`,
    mediumLink: `https://medium.com/@thanosparavantis`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Thanos Paravantis`,
        short_name: `Thanos Paravantis`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-89442805-3",
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
  ],
}
