const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
    entry: './src/FlappyBird.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
    },
    resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/'),
    },
    mode: 'development',
    devServer: {
        static: {
          directory: path.join(__dirname, './dist'),
        },
        compress: true,  
      },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Flappy Bird',
            filename: 'index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
              { from: './dist/assets', to : 'assets' }
            ]
          }),
    ],
    performance: { hints: false }
  //   performance: {
  //     hints: false,
  //     maxEntrypointSize: 512000,
  //     maxAssetSize: 512000
  // }
    // optimization:{
    //     splitChunks:{
    //         chunks: 'all'
    //     }
    // }
}