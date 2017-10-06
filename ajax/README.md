ajax

====
#### 服务器
  * wrap server --------------  php 开发环境
      1. w --------- Windows
      2. r --------- apache 服务器软件
      3. a --------- mysql 数据库
      4. p --------- php php语言环境
  * 网页浏览过程
  * 服务器文件 命名禁止中文
  * wrap server 使用
      1. localhost 本机  127.0.0.1

#### ajax 功能
  * 无刷新数据读取
      1. 行业案例：百度地图，百度搜索的关键词相关推荐

  * 使用ajax 必须放在服务器端
  * 使用ajax.js 读取 服务器data.js 里的数据


#### ajax 基本使用
  * 读取json 或者数组
  * 服务器端返回的数据为string 类型
  * eval() 可以计算某个字符串 并执行其中的js 代码
    1. var str = '1+1';
       var res = eval(str);
       console.log(res); 输出结果为 2
    2. var str2 = 'function(){alert(1)}'   转函数
       eval('('+str2+')()'); 调用函数时，字符串拼接一个括号
       即str2 = '(function(){alert(1)})()'  会弹出一个小弹窗

    3. eval(json)  转json对象
        如果是Json字符串的话，{} js会认为是语句块来处理，所以会报错
        转json字符串，eval('({})');
          例如： var jsonstr = '{"name":"hello"}';
                var a = eval('('+jsonstr+')');

    4. eval(数组字符串)   将数组字符串转成数组
        var str3 = '['李白','杜甫']';
        var b = eval(str3);
        console.log(b[0]);  结果为 李白



#### ajax 过程
  1. 发送请求
  2. 服务器返回数据 string
  3. 解析数据
  4. 根据需求显示



#### ajax 问题
  * 字符编码问题
    1. 如果页面编码和数据 文件编码不一致，中文出现乱码问题
    2. 需要数据文件和html编码一致
  * 缓存问题
    1. 浏览器缓存机制

#### 如何自己实现一个ajax 的Js库
  1. ajax
        * a  ------------ Asynchronous 异步
        * j  ------------ javascript
        * a  ------------ and
        * x  ------------ xml
  2. 核心： XMLHttpRequest 对象(    相当于电话)
      * 用于向服务器发送请求
  3. 类似 打电话
      1. 首先有个电话 ( XMLHttpRequest )
            * var ajax = new XMLHttpRequest();
      2. 拨号
            * ajax.open (type,url,类型)
              * type  ------------  get/post
              * url   ------------  数据地址
              * 类型  -------------  true(异步) 常用/false(同步)
                  * 异步 : 多件事情一起做
                  * 同步 : 一件一件做
      3. 等待接通
          * ajax.send()
          等待服务器响应
          * ajax.onreadystatechange = function(){   类似于window.onload  
          }

          readyState 记录响应
            1. 0 没有初始化
            2. 1 正在发送请求
            3. 2 send()完成，已收到全部内容
            4. 3 正在解析服务器内容
            5. 4 解析内容完成 可以在js 中调用
      4. 接通 以后，进行通话
          * status 属性（请求结果 状态）
      5. 成功以后 接到数据
          *

####  form 表单
      1. get
          * 数据通过 url（地址栏的网址传参）
              安全性低，有长度限制
      2. post
          * 不放在url 中  安全性高
  2. 了解 name 属性的用途：
      用于后台 接收数据
  3. 常见的http错误码
      404： 找不到页面
      505:
      503:


#### jsonp 跨域
    www.a.com   用ajax 调用 www.b.com 接口数据
    
      1. XMLHttpRequest
      2. jquery ajax,get,post

      浏览器的同源策略
        协议、域名、端口、任何一个不同，都会触发同源策略，

        协议：
          类似 ：https  http  localhost:8080 localhost:8081
          
          http://localhost:8080/api.php

        解决跨域方案
          1. 使用jsonp
            ajax 请求用jsonp ,请求数据时带着callback 
            后端修改接口,接收前端的callback参数 ，并和json拼接输出 ，拼接的结果
              text({"id":1,"name":"李白"});
            后端:
              $callback 

          2. 原生写ajax请求
              1. 创建script标签
                var scriptel = document.creatElement('script');
                scriptel.src = 'http://localhost/api-jsonp.php?callback = callfn';
                document.head.appedChild('scriptel');//将创建的Script标签放在页面中
                document.head.removeChild('scriptel');//


              2.
              写一个function 
              function callfn(data){
                
              }




          2. 方法2：服务器端设置Access请求的头文件
          3. 方法3：使用代理
              代理服务器：正向代理，反向代理
#### jquery 中的ajax 方法
    1. $.ajax(); ------  全能型

    2. $.get()  -------- Get 方式获取
    取json 格式数据
    $.post()  ---------  post方式获取 

















        1111111111111111111111111111111
