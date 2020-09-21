/*
 * @Descripttion:
 * @version:
 * @Author: infinityboy
 * @Date: 2020-09-21 10:25:49
 * @LastEditors: infinityboy
 * @LastEditTime: 2020-09-21 10:26:36
 */
//offline-stabilize
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
module.exports = {
  outputDir: "dist", //打包文件夹名字
  productionSourceMap: false,
  publicPath: "./",
  devServer: {
    // 设置主机地址
    host: "0.0.0.0",
    // 设置默认端口
    port: 8080,
    // 设置代理
    proxy: {
      "/api/": {
        // target: 'http://ngvalprofz.cindata.cn', // 线上测试后台地址
        target: "http://10.200.15.196:8080", // 本地后台地址
        secure: false,
        ws: false,
        // 是否跨域
        changeOrigin: true,
        pathRewrite: { "^/api/": "/" },
      },
    },
  },
};
