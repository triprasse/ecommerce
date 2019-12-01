const config = {
  mode: "production",
  entry : {
    app: ['./resource/assets/js/app.js'],
  },
  output: {
    path: `${__dirname}/public/assets/js/`,
    filename: "[name].js",
  },
  module : {
    rules : [{
      test : /\.js$/,
      exclude : /node_modules/
    }
  ]}
}

module.exports = config