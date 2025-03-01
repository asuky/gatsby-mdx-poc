/**
 * @type {import('gatsby').GatsbyConfig}
 */
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

import remarkGfm from 'remark-gfm';

const __dirname = dirname(fileURLToPath(import.meta.url));

const config = {
  siteMetadata: {
    title: `mdx-poc`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `plugin-mdx-poc`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        mdxOptions: {
          remarkPlugins: [
            remarkGfm
          ]
        }
      }
    },
    // {
    //   resolve: `gatsby-plugin-page-creator`,
    //   options: {
    //     path: `${__dirname}/contents`
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/src/pages`
      }
    }
  ],
};

export default config;