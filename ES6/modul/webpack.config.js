var webpack = require('webpack');
//var htmlWp = require('html-webpack-plugin');

module.exports = {
  entry :{
      app:'./app/index.js'
  },
  output:{
     path:`${__dirname}/dist`,
     publicPath:'./',
     filename :'index_bundle.js'
  },
  module:{
     rules:[
        // 1.处理Js  所有js 文件es6 转es5
        {
          test:/\.js$/,
          exclude:/node_modules/,
          loader:'babel-loader',
          query:{
            presets:['es2015'],//
          }
        }

  ]
}

}
