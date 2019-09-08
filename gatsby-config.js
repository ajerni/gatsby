module.exports = {
  siteMetadata: {
    title: `Gatsby Test Andi`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    mydata : `guguseli from mydata aus siteMetadata in gatsby-config.js`,
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
        url: "https://api-euwest.graphcms.com/v1/ck05dspnl13gs01d7htat4n7e/master",
        //refetchInterval: 60,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
