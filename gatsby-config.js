require('dotenv').config()
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
})
module.exports = {
  siteMetadata: {
    title: `FLS Group`,
    description: `Welcome to FLS Group`,
    author: `@saigondigital`,
    siteUrl: `https://fls-group.com/`,
    og: {
      siteName: "FLS Group",
      fbTitle: "FLS Group",
      fbDescription: "Welcome to FLS Group",
      twitterCreator: "@saigondigital",
      twitterDescription: "Welcome to FLS Group",
    },
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-glslify`,
    `gatsby-plugin-gatsby-cloud`,
    "gatsby-plugin-sitemap",
    `gatsby-plugin-transition-link`,
    "gatsby-plugin-netlify",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-10QD5QRGZK", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
        },
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WPGRAPHQL_URL ?? '',
        schema: {
          timeout: 100000,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `${__dirname}/src/images/svgs`,
        },
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://limited.us21.list-manage.com/subscribe/post?u=a87837307195289b4bb149f57&amp;id=c845c628f3&amp;f_id=002ceae6f0",
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `none`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/favicon.png`,
      },
    },
  ],
}
