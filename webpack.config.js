module.exports = {
  entry: './src/deep-press.js',
  output: {
    filename: 'deep-press.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  "modules": 'commonjs',
                  "targets": "> 5%, not dead",
                }
              ],
            ],
            plugins: [
              ["@babel/plugin-transform-template-literals"]
            ],
          },
        },
      },
      {
        test: /\.(png|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            },
          },
        ],
      },
    ],
  },
};