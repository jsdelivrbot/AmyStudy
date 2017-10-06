#### ES6 modules 模块化
 1. ES6使用模块化
   *  import 导入
   *  export 导出
   * babel 转义ES6

2. 项目目录
   * project
   * -------- node-modues(node第三方包)
   * -------- app(模块文件夹)
   *           -------- index.js(入口文件)
   *           -------- add.js(add模块)
   *           -------- reduce.js(reduce模块)
   * -------- webpack.config.js  (该项目的webpack配置文件)
3. 所需的node包
  * webpack (模块打捆器)  浏览器很多不支持导入导出，需要webpack
  * babel (webpack中的babel)
    1. babal-loader   (webpack的babel-loader 加载器)
    2. babel-core     (webpack)
    3. babel-preset-es2015  (ES6转ES5)
    4. html-webpack-plugin  (处理html)
4. 使用Webpack的原因
  * 它是最火的模块打包工具
  * 大多浏览器对ES6支持不好
  * 使用nodejs+ webpack 在node 中开发



#### webpack
  1.  
    * webpack 是一个构建工具，node的一个包，功能：根据自己的规则，将开发网站用的资源打包成一个或多个文件
  2. 单页面应用   ------------- 例如：百度新闻
    * 大多数只有一个.html 文件
    * 用Ajax 动态获取数据
  3. Es6用webpack + babel  去构建  编译，使浏览器支持ES6模块化
  4. webpack 模块打捆器
    * 需要加载器 loader
    * 需要一个webpack.config.js(webpack配置文件)
  5. 过程
    * 安装相关包
    * 编写webpack.config.js


#### ES 模块化规范
  1. 编译时加载
  2. 一个模块是一个独立的文件
  3. 文件内部所有变量，外部无法访问
  4. 外部使用模块，必须 使用import 导入，函数自身export导出
  5. export 命令
    * as 关键字，重命名对外接口
    * 可以导出class, json 对象，function 和变量
  6. import 命令
    * 导入模块时，解构
      ``` Javascript
        import Test from './test';

        let te = new Test();
        te.ride(2,3);

      ```
      一个test类里有好多方法,但是，只需要ride方法，所以，这里就需要解构
    * 导入类的时候 ，需要实例化才可以使用里面的方法
    * 导入时，{}里面的变量名，必须与导出的模块接口名相同
    * 可以使用as 重命名
      ``` Javascript
          import {reduce as re} from './test';
      ```
    * 一个模块里有多个需要导入的文件时，使用整体导入
      * 使用   *  指定一个对象，导出所有值 和方法
      ``` Javascript
        import * as abc from './count';
         abc.show();//count 里面的show 方法
         let res1 = abc.reduce(2,3);//count 里面的reduce方法
         console.log(res1);
      ```
    * 一个文件可以导出两个方法，但是不能加default
    * 导出文件
    ```Javascript
       export function ride(x,y){
          return x - y;
      }
    ```














































  111111111111111111111
