==== ES6
#### javascript
  * W3c创建了html标准
  * javascript遵循一套标准: ECMAScript   现在遵循的是ES5  最新的为ES6
  * ECMA:欧洲计算机制造商协会

#### ECMAScript
  1.
    * 是一种标准和规范
    * 可以称ES6    ECMA2015
    * 2015年6月，发布了ES6的第一个版本，正式名称(ECMAScript 2015标准)，简称ES2015
    * 2016年6月，进行了小幅度的修改(ECMAScript 2016标准)，简称ES6.1
    * 2017年6月，预计发布ES2017标准
  2. 历史
    * 1997年，ECMAScript 1.0
    * 1998年，ECMAScript 2.0
    * 1999年，ECMAScript 3.0(初学者主流版本)
    * 2008年，ECMAScript 5
    * 2009年，ECMAScript 正式发布
    * 2011年6月，ECMAScript 5.1
    * 2015年6月，ECMAScript 6正式通过
 3. 兼容问题
    * can i use 网站查询
    * 各大浏览器对ES6兼容程度不同
    * Node 是javascript运行环境，对ES6的兼容性更高，

#### 语法提案--标准的批准流程
  1. 5个阶段
    * state-0  展示阶段
    * state-1  征求意见阶段
    * state-2  草案阶段
    * state-3  侯选人阶段
    * state-4  定稿阶段


#### babel转码器
  1. babel是一个广泛使用的ES6转码器，可以将ES6代码转成ES5
  2. 使用了babel可以使用es6 编写代码
  3. 浏览器中使用babel
    * 从babel6.0开始，不再提供浏览器版本
    * 使用babel5.x版本
    * 需要引入


####
  1. let
    * 不允许在同一变量作用域定义同一个变量
    * let
  2. const
    * 定义一个常量，一旦声明常量的值不能改变



####变量结构赋值
  1. ES6允许按照一定的模式，从数组和对象中提取值，对变量进行赋值，称为解构赋值
  2. 数组解构赋值
    * 解构不成功，变量值 为undefined
      ``` JavaScript
      let[a,b,c] = [1,2,3];
      console.log(a);//输出结果为1
     ```
  3. JSON 对象解构赋值
      ```JavaScript
      let data = {
         'name' :'李白',
         'Job':'剑客'，
         text:function(){
           console.log(aaa);
         }
      }

      let {name,Job,test} = data;
      console.log(name);
      test();

    ```
    * 变量没有顺序要求，但变量必须与属性同名，才能到到值
    * 更加清晰明了

  4. 字符串解构赋值
    ```Javascript
        let[a,b,c,d,e] = 'hello';
    ```
    * 相当于数组里的split 将hello分解成单个字符，给Abcde

 5. 函数解构
    ```Javascript
      function dev([x,y]){
        console.log(x+y);
      }
      dev([1,2]);

    ```

#### 变量解构赋值的作用
  1. 变量交换
      ```Javascript
        let x = 1;
        let y = 2;
        [x,y] = [y,x];
      ```
  2. 提取JSON
  3. 获取模块中的方法
    ```Javascript
      let {SourNode} = require('source-map');

    ```
  4. 多个函数返回值
    ```Javascript
      function test(){
        return [1,2,3]


        return {
          name : '李白'，
          Job : '剑客'
        }
      }

      var data = test();//得到返回的json数据
      console.log(data.name)

      // es6写法
      let {name,Job} = test();
      console.log(name);

    ```



























































11111111111111111
