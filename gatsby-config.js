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
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `G-09JRJVJEB8`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    // {
    //   resolve: "gatsby-plugin-google-tagmanager",
    //   options: {
    //     id: "258471519",
    //     defaultDataLayer: { platform: "gatsby" },
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     // You can add multiple tracking ids and a pageview event will be fired for all of them.
    //     trackingIds: [
    //       "GA-TRACKING_ID", // Google Analytics / GA
    //       "AW-CONVERSION_ID", // Google Ads / Adwords / AW
    //       "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
    //     ],
    //   },
    // }
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "258471519",
    //   },
    // },
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
        icon: "src/images/nyc-icon.png",
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
