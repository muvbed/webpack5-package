const path = require("path");
const { merge } = require("webpack-merge");
const baseWebpackConfig = require(path.join(__dirname, "webpack.base.config"));
const devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",
  devServer: {
    watchFiles: path.join(__dirname, "..", "src"),
    port: 3000,
    open: true,
    client: {
      overlay: true,
      progress: true,
    },
  },
});

module.exports = new Promise((resolve) => {
  resolve(devWebpackConfig);
});
