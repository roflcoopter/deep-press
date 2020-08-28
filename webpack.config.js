module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'deep-press.js',
    // path: '/workspace/hass/www/community/deep-press/'
  },
  // devtool: '#inline-source-map',
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
              "@babel/plugin-transform-template-literals",
              "@babel/plugin-proposal-class-properties"
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
