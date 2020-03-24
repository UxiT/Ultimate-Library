module.exports = {
  module:{
    rules:[{
      test: /\.js$/,
      exclude: /ndoe_modulse/,
      use:{
        loader:"babel-loader"
      }
    }]
  }
}
