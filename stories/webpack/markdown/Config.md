

```
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const srcPath = path.join(__dirname, 'src')
const distPath = path.join(__dirname, 'dist')

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx|ts?$/,
        exclude: [/node_modules/, /\.md/, /\.txt/, /\.map/],
        use: ['awesome-typescript-loader'],
      },
      {
        test: /\.js|jsx?$/,
        exclude: [/node_modules/, /\.md/, /\.txt/, /\.map/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env']
          }
        }
      },
      {
        test: /\.(sass|less)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          }
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        exclude: [/\.md/, /\.txt/, /\.map/],
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      src: path.resolve(srcPath),
      // react: path.resolve(__dirname, '..', 'node_modules', 'react'),
      // 'react-dom': path.resolve(__dirname, '..', 'node_modules', 'react-dom'),
      '@storybook/addons': path.resolve(
        __dirname,
        '..',
        'node_modules',
        '@storybook',
        'addons'
      ),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  externals: {},
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true,
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
  ],
}

```
