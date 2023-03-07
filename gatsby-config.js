// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require(`path`)
const tailwindConfig = require("./tailwind.config.js")
const siteUrl = process.env.URL || `https://headless.infusion121.com`

module.exports = {
  //configuration object
  siteMetadata: {
    title: `Headless CMS Base`,
    description: `Headless CMS Base`,
    author: `@gatsbyjs`,
    siteUrl: `https://headless.infusion121.com`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
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
        name: "Gatsby Starter WordPress Homepage",
        short_name: "Gatsby",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#ffffff",
        theme_color: "#004ca3",
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat:100,200,300,400,500,600,700,800,900`,
          `Josefin+Slab:400,500,600`,
        ],
        display: "swap",
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
        url:
          process.env.WPGRAPHQL_URL ||
          `https://admin.headless.infusion121.com/graphql`,
        schema: {
          //Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
          typePrefix: `Wp`,
        },
        develop: {
          //caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
          hardCacheMediaFiles: true,
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves (aka. faster).
                  50
                : // and we don't actually need more than 5000 in production for this particular site
                  5000,
          },
        },
      },
    },
    {
      // Dont include url from SSG
      resolve: "gatsby-plugin-exclude",
      options: { paths: ["/contact-iframe"] },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://infusion121.us12.list-manage.com/subscribe/post?u=6f9216b04622ed9de64773de7&amp;id=be62cc7c06&amp;f_id=001268e0f0", // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
  ],
}
