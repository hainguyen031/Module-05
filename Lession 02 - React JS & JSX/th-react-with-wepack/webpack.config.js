const path = require("path");

//add html-webpack-plugin into configuration file to use at the below
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", //path to index.js file
  output: {
    path: path.resolve(__dirname, "dist"), //folder include build files
    filename: "index.bundle.js", //built file name
    clean: true,
  },
  devServer: {
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/, //use babel-loader for .js files
        exclude: /node_modules/, //exclude node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  /* configure index.html file from public folder */
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};