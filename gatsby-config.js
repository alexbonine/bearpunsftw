module.exports = {
  siteMetadata: {
    title: "Bear Puns FTW",
    description: "Wedding Website of Shawna Carney and Alex Bonine",
    author: "Alex Bonine (lemurdev@gmail.com)",
    siteUrl: "https://bearpunsftw.com"
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "258471519",
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
  ],
};
