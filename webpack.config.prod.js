import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor/vendor'),
    main: path.resolve(__dirname, 'src/core/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  optimization: {
    minimize: true,
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor',
                chunks: 'all'
            }
        }
    }
},
  plugins: [
    new ExtractTextPlugin('[name].[contenthash].css'),
    // Hash the files using MD5 so that their names changes when the content changes.
    new WebpackMd5Hash(),

    // Create HTML file that includes refereence to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/core/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRdundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyeLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),
    //Eliminate duplicate packages when generating bundle
    new webpack.optimize.OccurrenceOrderPlugin(),

  ],
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}