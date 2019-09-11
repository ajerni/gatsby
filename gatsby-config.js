module.exports = {
  siteMetadata: {
    title: `Gatsby Playground`,
    description: `Andis Gatsby Learning Project`,
    author: `Andi Erni`,
    mydata: `mydata aus siteMetadata in gatsby-config.js is telling you: This page requires login!`,
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "ANDIAPI",
        // This is field under which it's accessible
        fieldName: "andiapi",
        // Url to query from
        url: "https://shielded-island-99066.herokuapp.com",
        //refetchInterval: 60,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "FRUITAPI",
        // This is field under which it's accessible
        fieldName: "fruitapi",
        // Url to query from
        url:
          "https://api-euwest.graphcms.com/v1/ck05dspnl13gs01d7htat4n7e/master",
        refetchInterval: 10,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          `gatsby-remark-responsive-iframe`
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-netlify-identity`,
      options: {
        url: `https://gatsby.andierni.ch/`
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
