// my-webpack-transformer.js
const paths = require('./node_modules/react-scripts/config/paths')
module.exports = function editWebpackConfig (webpackConfig) {
  // webpackConfig is the parsed JS webpack config from react-scrips.
  // modify it here synchronously, & return it.
  var babel = webpackConfig.module.rules[1].oneOf[1];
  babel.include = [babel.include, paths.appNodeModules];
  return Object.assign({}, webpackConfig, {

  })
}
