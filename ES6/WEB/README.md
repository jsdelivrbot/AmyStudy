#### webpack 2.x
  1. 搭建基于 webpack 构建的项目目录
    * 编译es6
    * 处理css文件
    * 处理图片
    * 处理字体文件
    * 开启一个本地测试服务器
 2. npm install babel-core  babel-loader babel-plugin-import babel-preset-es2015
    babel-preset-stage-0

    npm 同时装多个包
    babel-core
    babel-
  * loader 加载器
    1. style-loader
    2. url-loader
    3. css-loader
    4. file-loader
  * babel 相关
    1. babel-core
    2. babel-loader
    3. babel-preset-stage-0
    4. babel-preset-es2015
 * 处理html
    1. html-webpack-plugin

 3. 编写webpack.config.js


#### 项目目录规划
  >> project (项目名)
    >>> node_modules
    >>> webpack.config.js
    >>> package.json
    >>> app(源代码目录)
      >>>> index.js(入口文件)
   >>> dist| bulid(编译完成后的代码)

<img src="base64编码">


  1. 开发过程
    * 项目根目录下执行 webpack-dev-server   自动启动服务器
    * 打包或者上线时，运行 webpack -p     打包命令

  2.  webpack 两种配置文件
    * 开发模式 scripts
      1. 要开启一些东西例如：soucrce-map devServer
      2. webpack.config.dev.js
      3. 开发模式script   "start":'webpack-dev-server --config webpack.config.dev.js'
      4. 执行 npm start
      5. 用localhost:3000去预览

    * 生产模式
     * 生产模式Scripts
        1. webpack.config.prod.js
        2. 先清空一下，防止有缓存  dist
        3. "clean" :'rimraf dist',//删除dist文件夹
        4. package.json里 是json类的数据 ，数据的最后一个不允许有 逗号，否则报错
        5. "build":"rimraf dist & webpack --config webpack.config.prod.js"
    * 没有devtool 调试模式


  3. 通过 npm scripts
    * package.json里面的script 属性可以快捷的执行命令
    * npm run start

  4. package.json 中的script ，它可以执行脚本
    ``` Javascript    
      npm run hello
      script:{
        "test":'',
        "hello":'hello world',
        "start":'webpack-dev-server --config webpack.config.dev.js',//指定一个配置文件
        ""
      }

  ```


#### css使用
  * import './css/index.css';
  * 本地图片使用
    * require('./images/a.jpg')
#### cdn
 * 给文件打码 去除缓存，每次都去拉取最新的
