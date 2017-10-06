var webpack = require('webpack');
var htmlW = require('html-webpack-plugin');
// 实例化html-webpack-plugin
var htmlWConfig = new htmlW({
    template:`${__dirname}/index.html`,//处理的文件  根目录下的index.html文件
    filename:'index.html',
    inject:'body'
});



module.exports = {
     //devtool:"inline-source-map",// 用于错误调试  将源代码生成一个地图的东西，会导致打包的js文件会很大
    //入口文件
    entry:{
        app:'./app/index.js'
    },

    // 出口文件
    output:{
        // 输出 目录 )__dirname 项目目录
        path:`${__dirname}/dist`,
        //路径
        publicPath:'/',
        //输出 的文件名
        filename:'index_bundele.js'
    },

    //加载 器配置
    module:{
      //需要处理的文件  需要使用的加载 器
      rules:[
        //处理js
        {
          //声明要处理哪个格式的文件
          test:/\.js$/,
          exclude:/node_modules/,
          loader:'babel-loader'
        },
        //处理css
        {
          test:/\.css$/,
          use:[
            {loader:"style-loader"},
            {loader:"css-loader"}
          ]
        },

        //图片
        {
          test:/\.(jpg|png|gif)$/,
          use:[
            {loader:'url-loader',
             options:{
              // 不小于1000kb时，放在images/以一个乱码来命名这个文件
               limit:1000,
               name:"images/[hash:8].[name].[ext]"
             }
            },
          ]
        },
          // 处理字体图片
        {
          test:/\.(ttf|woff|svg|eot)\??.*$/,
          use:[
            {loader:'file-loader',
             options:{

              // 去除缓存
               name:"fonts/[hash:8].[name].[ext]"
             }
            },
          ]
        }
      ]
    },


    // 开启一个本地服务器
    devServer:{
      host:"0.0.0.0",
      inline:true,
      quiet:true,
      port:3000,
      //防止 出现 Invalid host header 错误
      disableHostCheck:true,
    },

    //插件配置
    plugins:[
        htmlWConfig
    ]

}
