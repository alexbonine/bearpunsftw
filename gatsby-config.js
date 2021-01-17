module.exports = {
  siteMetadata: {
    title: "Bear Puns FTW",
    description: "Wedding Website of Shawna Carney and Alex Bonine",
    author: "Alex Bonine (lemurdev@gmail.com)",
    siteUrl: "https://bearpunsftw.com",
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "258471519",
      },
    },
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          styles: `src/styles`,
          config: `config/`,
          "@utils": "src/utils/",
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
  ],
};
