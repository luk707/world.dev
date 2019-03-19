module.exports = {
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-emotion"
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Source+Code+Pro", "Sarabun:400,400i,500,800"]
      }
    },
    {
      resolve: "gatsby-source-instagram",
      options: {
        username: "world.dev"
      }
    }
  ]
};
