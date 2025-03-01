/**
 * @type {import('gatsby').GatsbyConfig}
 */
import { dirname } from 'path';


const config = {
  siteMetadata: {
    title: `mdx-poc`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `plugin-mdx-poc`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`
      }
    }
  ],
};

export default config;