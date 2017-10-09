JQuery
====
#### JQuery（jQuery.com）
   1. javaScript 库 --------  由John Resig 创建于2006年开源项目
   2. 理念： wirte less , do more
   3. 非常优雅的Api 和代码风格

#### 文件
 1. JQuery.1.8.3.js  开发版
 2. JQuery-1.8.3.min.js  压缩版


#### 功能
   1. 选择器机制
   2. 封装了dom 操作，简化节点等操作
   3. 封装了常用事件
   4. 浏览器兼容，e6
   5. 完善ajax
   6. 链式操作
   7. 隐式迭代
   8. 插件机制

#### 基本使用
   1. 先引用JQuery 的js文本
   2. 核心函数是JQuery()
        $是JQuery()的缩写模式

####  选择器
  1. $('#id') 通过 id 的方式
  2. $('.test') 通过class的方式
  3. $('p')   通过标签的方式
  4. $('.list li')   层次选择器
  5. $('.list li ,.list')
  6. :eq(num) 特定索引的元素
  7. :first :odd :even :last

#### window.onload 和 $(document).ready()
  1. window.onload 只有一个起作用，写多个，后面会覆盖前面的
  2. $(document).ready()可以写多个，按顺序执行
  3. window.onload 必须等待所有元素（图片）都加载完成才能执行   等待时间过长
     $(document).ready() 网页中所有dom 结构加载完成即可执行
  4. $(document).ready() 可以缩写为$(function)


#### JQuery 对象
  1. 通过核心方法$()得到的返回值
  2. 不能直接使用原生Js 的方法
  3. 访问JQuery 对象的一些方法
    * length
    * each(Callback) 遍历JQuery对象
    * get(index)
        例如:$('#list li').get(2).style.


####  DOM对象
  1. 可以直接使用Js原生方法
    document.getElementById('id');


#### JQuery 对象转换成 DOM 对象
  1. 用JQuery开发时，有时候需要使用原生 Js DOM 对象的方法，所以需要转换
  2.
    * JQuery 对象类似数组的对象，可以使用索引获取DOM 对象
        例如： var foo = $('#list li');
              foo[0]  //得到的第一个li

#### JQuery里绑定事件
    $(el).click
    1. show(speed) 显示
    2. hide(speed)  隐藏
    3. slideUp(speed)   收起
    4. slideDown(speed)  展开



####  JQuery 的this
  1. $(this).fadeIn()
  2. $(a).parent()  //获取a的父元素
  3. $(a).siblings()  //获取a的兄弟元素
  3. $(a).find('b')


#### 索引相关
  1. $('li').eq(1) //获取第2个元素
  2. $('li').index($('.test'))   li为.test的元素，在所有li中的索引


#### DOM 操作



#### JQuery 事件
   *

#### JQuery 动画
  *



#### JQuery 的样式操作
  * addClass


#### JQuery 中的ajax



#### JQuery 插件
  1. 提供插件机制
  2. 开发者可以按照规范，开发各种功能插件 比如：轮播图，返回顶部，弹层
  3. 在JQuery 下面引入插件
  4. JQuery 官方插件库  ：Jquery ui
  5. bootstrap :css + jquery 常用的库  twitter（微博鼻祖）
  6. 如何使用开源的JQuery 插件
      * 看文档
      * 按规范写html
      * 引入 JQuery.js
      * 引用使用的jquery 插件
      * 按文档和规范调用，设置参数
