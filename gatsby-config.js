// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require(`path`)
const tailwindConfig = require("./tailwind.config.js")
const siteUrl = process.env.URL || `https://payinn.com.au`

module.exports = {
  //configuration object
  trailingSlash: `always`,
  siteMetadata: {
    title: `PayInn`,
    description: `Payments Innovations specialises in helping businesses large and Institutional enterprises discover the benefits of Australia’s rapidly changing Payments Processing Landscape.`,
    author: `@payinn`,
    siteUrl: `https://payinn.com.au`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: "gatsby-plugin-sass",
      options: {
        postCssPlugins: [
          require("postcss-preset-env")({
            stage: 0,
          }),
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          require(`cssnano`),
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "templates",
        path: `${__dirname}/src/templates`,
      },
    },

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Payments Innovations",
        short_name: "PayInn",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#02111d",
        theme_color: "#02111d",
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        components: path.join(__dirname, "src/components"),
        sections: path.join(__dirname, "src/sections"),
        images: path.join(__dirname, "src/images"),
        styles: path.join(__dirname, "src/styles"),
        pages: path.join(__dirname, "src/pages"),
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WPGRAPHQL_URL || `https://admin.payinn.com.au/graphql`,
      },
    },
    {
      // Dont include url from SSG
      resolve: "gatsby-plugin-exclude",
      options: { paths: ["/contact-iframe"] },
    },
  ],
}
