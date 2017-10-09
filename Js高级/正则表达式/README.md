字符串
====
#### 基本应用
  1. var str = ''   var str = ""
    * var str1 = '</p class="text">name</p>'
    * 字符串连接  +
    * new String('abc');  包装类  || 实例化
    * 对象：好比一个模板 通过 new的方式可以产生一个新的东西，新产生的东西 带有模板应用的功能
#### 常用方法
  2.   indexOf('元素')  返回元素在字符串中的索引值  找不到返回-1
    * lastindexOf('元素')  返回元素最后出现的索引值  
    * search  于 indexOf 相似，配合正则表达式使用
      * str.search('e')  返回元素在字符串中的索引值
    * match 与正则表达式配合使用
    * replace('a','b');   查找并替换  将a都替换成  b
      1. 可以和正则表达式一起使用
      2. 会返回一个新的字符串，所以在新建 一个新的字符来接收
  3. slice(开始位置，结束位置)  抽取一个子串
      1. 没有指定位置，则截取到最后
      2. 不包括结束位置
      3. 会返回一个新的字符串，所以用一个新的变量来接收它

  4. substring(开始位置，结束位置)
      1. slice 和 substring 的区别
        * 都传-1 的话  slice 会从右往前取，变成倒数第几个
        * substring 相当于substring(0)  会取出所有
  5. split('符号')  将字符串按符号分成数组
#### json  和 json 字符串
  1. json对象：{}
    * js可以之间操作 使用 .  和 []
      var data = {
        name: '李白',
        title:'诗人'
      }

      data.name    data[name]
    * 取json 数据 用for in 循环

  2. json字符串
    * json 格式的字符串
    * json 的属性和属性值 都要有引号 一般是双引
  3. json 字符串 转换成 json 对象
    * json 字符串转换成json 对象  方便直接使用js调用
    * json 字符串转 json对象
        1. JSON.parse(str);
        2. eval(str);

    * json 对象转成 json 字符串
        1. JSON.string (obj);
        2. obj.toJSONString();
    * toLowerCase() 转小写
    * toUpperCase() 转大写

    4. 遍历json
          for in






#### javascript 历史
  1. 浏览器运行  微软  google firefox apple
  2. HTML HTML5  w3c制定标准
  3. script 全称  ECMAScript
  4. html 超文本传输
