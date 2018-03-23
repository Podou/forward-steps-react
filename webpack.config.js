var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var srcPath = path.join(__dirname, 'src')
var distPath = path.join(__dirname, 'dist')
var port = 9000

module.exports = {
  entry: {
    main: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:' + port,
      'webpack/hot/only-dev-server',
      path.resolve(srcPath, 'index.tsx'),
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: distPath,
  },
  devtool: 'evail-source-map', // 'source-map'
  module: {
    rules: [
      {
        test: /\.tsx?|jsx?$/,
        exclude: /node_modules/,
        use: ['awesome-typescript-loader'],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { url: false }
            }, {
              loader: 'less-loader'
            }
          ]
        }),
      },
      {
        test: /\.(css)$/,
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
              options: {
                plugins: (loader) => [
                  require('autoprefixer'),
                ]
              }
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
      filename: 'reactgui.bundle.css',
      allChunks: true,
    }),
    // hot reload
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      path: distPath,
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
      chunks: ['main'],
      chunksSortMode: 'dependency',
    }),
    // new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin),
  ],
  devServer: {
    contentBase: distPath,
    compress: true,
    port,
    hot: true,
    proxy: {
      '/axapi/*': {
        target: 'https://' + (process.env.AXAPI_HOST || '192.168.99.54'),
        secure: false,
        rewrite: (req, res) => {
          // tslint:disable-next-line:no-console
          console.log('Requesting axapi via webpack dev server proxy', req)
        },
      },
    },
  }
}
