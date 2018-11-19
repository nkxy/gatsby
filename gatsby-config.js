module.exports = {
  siteMetadata: {
    name: `Nick Yang`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    `gatsby-plugin-favicon`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
        name: "data"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/blog-content`,
        name: "blog-content"
      }
    },
    `gatsby-transformer-remark`
  ]
};
