const { DefinePlugin } = require("webpack");

module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new DefinePlugin({
      "process.env.mode": JSON.stringify("PRODUCTION"),
    }),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
