module.exports = {
  siteMetadata: {
    siteUrl: `https://www.thanosparavantis.com`,
    seoTitle: `Thanos Paravantis`,
    seoDescription: `My personal website with information about me, including projects, work experience, educational background and hobbies.`,
    seoKeywords: `thanos paravantis, computer science, ham radio, amateur radio, greece, programming, frontend, backend, software, frontend, backend`,
    seoUrl: `https://www.thanosparavantis.com`,
    facebookLink: `https://www.facebook.com/thanosparavantis/`,
    twitterLink: `https://twitter.com/thparavantis`,
    linkedinLink: `https://www.linkedin.com/in/thanosparavantis/`,
    githubLink: `https://github.com/thanosparavantis`,
    youtubeLink: `https://www.youtube.com/channel/UCjBLN827xiPCA19MMt_jbmA`,
    reCaptchaKey: `6LdMY74UAAAAAM3EIrRzslKtYWc2OKGriLEuu53y`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/seo`],
      },
    },
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
        icon: `src/images/profile_picture.jpg`,
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
