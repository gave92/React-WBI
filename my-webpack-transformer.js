// my-webpack-transformer.js
const path = require('path')
const paths = require('./node_modules/react-scripts/config/paths')
module.exports = function editWebpackConfig (webpackConfig) {
  // webpackConfig is the parsed JS webpack config from react-scrips.
  // modify it here synchronously, & return it.
  var oneOf = webpackConfig.module.rules[1].oneOf;
  var babel = oneOf[1];
  babel.include = [babel.include, paths.appNodeModules];
  ttf = {
    test: /\.ttf$/,
    loader: "url-loader", // or directly file-loader
    include: path.resolve(__dirname, "node_modules/react-native-vector-icons"),
  };
  oneOf.push(ttf);
  return Object.assign({}, webpackConfig, {

  })
}
