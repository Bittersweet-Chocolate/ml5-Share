/*
 * @Author: zihao.chen
 * @Date: 2021-03-24 11:11:16
 * @LastEditors: zihao.chen
 * @LastEditTime: 2021-03-24 16:00:21
 * @Description: 
 */
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
      mode: 'development',
      entry: './src/index.js',
      output: { //输出文件
          path: resolve(__dirname, '/dist'),
          filename: 'main.js'
      },
      devServer: {
        //设置访问本地资源的目录
        contentBase: './src',
        // 启动gzip压缩
        compress: true,
        // 端口号
        port: 3000,
        // 自动打开浏览器
        open: true,
        hot: true
      },
      module: {
          rules: [
            {
              test: /\.css$/,
              use: [
                "style-loader",
                "css-loader"
              ]
            },
            {
              test: /\.(png|jpg|gif|svg)$/,
              use: [
                {
                  // 找每个html/css文件引用的img路径
                  loader: "url-loader",
                  options: {
                    // 对图片重命名，[hash:10]hash前10位 [ext]原文件拓展名
                    name: "[name]-[hash:8].min.[ext]",
                    limit: 8 * 1024, // 表示小于8kb的图片转为base64,大于8kb的是路径
                    outputPath: "images" //定义输出的图片文件夹
                  }
                }
              ]
            },
            {
              test: /\.html$/,
              // 处理html中的img文件（负责引入img，从而能被url-loader处理）
              loader: "html-loader"
            }
      ]
  },
  plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
          template: './src/index.html'
      }),
      new CopyWebpackPlugin([
          { 
            from: 'models/*',
            to: 'dist/models'
          }
      ])
  ]
}