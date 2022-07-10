// Tutorial: https://aglowiditsolutions.com/blog/react-webpack/
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Outputs all "import css" into one main.css file

module.exports = {
  entry: "./src/client.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  mode: "development",
};
