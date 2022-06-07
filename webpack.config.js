const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/FlappyBird/FlappyBirdGame.ts',
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
          directory: path.join(__dirname, ''),
        },
        compress: true,
      },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Flappy Bird',
            filename: 'index.html',
        })
    ],
    // optimization:{
    //     splitChunks:{
    //         chunks: 'all'
    //     }
    // }
}