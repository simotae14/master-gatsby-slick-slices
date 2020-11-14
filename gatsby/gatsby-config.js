import dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});

export default {
  siteMetadata: {
    title: `Slick slices`,
    siteUrl: 'https://gatsby.pizza',
    description: 'The best pizza place in Milan!',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // this is the name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'qrz5awtv',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      }
    },
  ]
};
