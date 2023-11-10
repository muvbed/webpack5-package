const path = require("path");
const { merge } = require("webpack-merge");
const baseWebpackConfig = require(path.join(__dirname, "webpack.base.config"));
const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: "production",
});

module.exports = new Promise((resolve) => {
  resolve(buildWebpackConfig);
});
