const mdxFeed = require("gatsby-plugin-mdx/feed");

module.exports = ({ contentPath = "content" }) => ({
  siteMetadata: {
    title: `WebSite title`,
    subTitle: ["WebSite subTitle"],
    description: `A description of your website.`,
    keywords: ["blog", "gatsby", "theme", "naseeihity"],
    author: `@authorName`,
    siteUrl: "https://siteUrl",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".md"],
        gatsbyRemarkPlugins: [
          { resolve: "gatsby-remark-autolink-headers" },
          { resolve: "gatsby-remark-prismjs" },
          { resolve: "gatsby-remark-smartypants" },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: contentPath,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.25rem`,
            },
          },
          "gatsby-remark-autolink-headers",
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              inlineCodeMarker: "÷",
            },
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: mdxFeed,
    },
    `gatsby-plugin-catch-links`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    "gatsby-plugin-offline",
  ],
});
