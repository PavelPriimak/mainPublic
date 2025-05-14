var path = require("path");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "./Api.js"),
    output: {
        path: path.resolve(__dirname, "output"),
        filename: "main.js"
    },
    mode: "development",
    module: {
        rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
          },
        ],
      },
    optimization: {
        minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
          ],
       },
    }