const path = require('path')
var webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const srcPath = path.join(__dirname, 'src')
const distPath = path.join(__dirname, 'dist')

module.exports = {
  entry: path.resolve(srcPath, 'index.ts'),
  output: {
    filename: 'index.js',
    path: distPath,
    library: 'a10-gui-widgets',
    libraryTarget: 'umd',
  },
  devtool: 'evail-source-map', // 'source-map'
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['awesome-typescript-loader'],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.(css|sass|less)$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                localIdentName: '[local]',
                // localIdentName: '[path][name]__[local]',
              },
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'less-loader',
            },
          ],
        }),
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      src: path.resolve(srcPath),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  externals: {},
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ExtractTextPlugin({
      filename: 'widgets.bundle.css',
      allChunks: true,
    }),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true,
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    new webpack.NamedModulesPlugin(),
    // new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin),
  ],
}
