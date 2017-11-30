/* eslint-disable */
const webpack = require('webpack')
const path = require('path')

const DashboardPlugin = require('webpack-dashboard/plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  context: path.resolve(__dirname, '../src'),

  entry: {
    main: isDevelopment
      ? ['../build/dev-client', './app']
      : ['./app']
  },

  output: {
    path: path.resolve(__dirname, isDevelopment ? '../server' : '../dist'),
    filename: isDevelopment ? '[name].js' : '[name]-[hash:4].js',
    chunkFilename: isDevelopment ? '[id].chunk.js' : '[name]-[hash:4].js'
  },

  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      'handlebars' : 'handlebars/dist/handlebars.js'
    }
  },
  node: {
    fs: "empty"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      },

      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[name]_[hash:4].[ext]'
            }
          }
        ]
      },

      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file',
        query: {
          limit: 10000,
          name: '[name].[ext]'
        }
      },
      // {
      //   test: /\.css$/,
      //   use: ["source-map-loader"],
      //   enforce: "pre"
      // },
      {
        test: /\.css$/,
        use: isDevelopment
          ? ExtractTextPlugin.extract({
            fallback: {
              loader: 'style-loader',
              options: {
                // sourceMap: true
              }
            },
            use: [{
              loader: 'css-loader',
              options: {
                // sourceMap: true
              }
            },
              {
                loader: 'postcss-loader',
                options: {
                  // sourceMap: true
                }
              }
            ]
          })
          // [{
          //   loader: 'style-loader',
          //   // options: {
          //   //   sourceMap: true
          //   // }
          // }, {
          //   loader: 'css-loader',
          //   options: {
          //     sourceMap: false
          //   }
          // }, {
          //   loader: 'postcss-loader',
          //   options: {
          //     sourceMap: true
          //   }
          // }]
          : ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader']
          })
      },

    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),   // built in config
        // NODE_ENV_BUILD: JSON.stringify(env),
      }
    }),
    new ExtractTextPlugin({filename: '[name]-[hash:4].css'}),

    new DashboardPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: Infinity,
    //   filename: isServer ? 'vendor.js' : 'vendor-[hash].js'
    // }),
  ],

  devtool: isDevelopment ? 'cheap-module-eval-source-map' : 'eval-source-map'
}
