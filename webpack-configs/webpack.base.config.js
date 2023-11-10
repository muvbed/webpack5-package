const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const path = require("path");
const fs = require("fs");

const PATHS = {
  src: path.join(__dirname, "..", "src"),
  dist: path.join(__dirname, "..", "dist"),
};

const ENTRIES_DIR = path.join(PATHS.src, "js");
const PAGES_DIR = path.join(PATHS.src, "layouts");

const ENTRIES_FILES = fs
  .readdirSync(ENTRIES_DIR)
  .filter((fileName) => fileName.endsWith(".js"));
const PAGES_FILES = fs
  .readdirSync(PAGES_DIR)
  .filter((fileName) => fileName.endsWith(".html"));

const ENTRIES = {};

for (let item of ENTRIES_FILES) {
  ENTRIES[item.replace(/\.js/, "")] = `${ENTRIES_DIR}/${item}`;
}

module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: ENTRIES,
  output: {
    filename: path.join("js", "[name].js"),
    path: PATHS.dist,
    clean: true,
    assetModuleFilename: "assets/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node-modules",
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
            options: {
              loader: {
                scss: "vue-style-loader!css-loader!sass-loader",
              },
            },
          },
          {
            loader: "vue-svg-inline-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|jp(e)?g|gif|woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        type: "asset/inline",
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "@": PATHS.src,
      vue: path.join("@vue", "runtime-dom"),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: path.join("css", "[name].css"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(PATHS.src, "static"),
          noErrorOnMissing: true,
        },
      ],
    }),
    ...PAGES_FILES.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: path.join(PAGES_DIR, page),
          filename: page,
          minify: true,
          inject: false,
        })
    ),
  ],
};
