module.exports = {
  siteMetadata: {
    title: `Ginger & Pickles & Captain Carrot`,
    author: `Beatrix Potter`,
    description: `A children's book with adventurous animals. In Norwegian written language.`,
    developer: `Ola Vea`,
    siteUrl: `https://olavea.carrd.co/`,
    social: {
      twitter: `olaholstvea`
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1224
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      }
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/Young_Beatrix_Potter.jpg`
      }
    },
    // {
    //   resolve: "gatsby-source-google-sheets",
    //   options: {
    //     spreadsheetId:
    //       "https://docs.google.com/spreadsheets/d/18Dg3dDhGFnnHZGCr2azbYRU8iIj50zjsvCkdFlReHT4/edit?usp=sharing",
    //     worksheetTitle: "ie the name in the worksheet tab",
    //     credentials: require("./client_secret.json")
    //   }
    // },

    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
  ]
};
