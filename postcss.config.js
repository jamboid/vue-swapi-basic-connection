module.exports = {
  syntax: require("postcss-scss"),
  plugins: [
    require("autoprefixer")({
     
    }),
    require("cssnano")({
      preset: [
        "default",
        {
          discardComments: {
            removeAll: true
          }
        }
      ]
    })
  ]
};
