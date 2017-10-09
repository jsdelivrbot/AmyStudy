cookie
====
#### cookie
 1. 用途
    * 信息存在客户端计算机上，用于客户端和服务器进行数据交互
    * 比如： 自动登录，记住用户名
    * 除了js ，其他语言有cookie

 2. 特性
    * 同一个网站中所有页面共享一套cookie
    * 数量和大小有限制
        1. 火狐上 firefox  大概支持50个cookie
            chorom 大概没什么限制
        2. 每个cookie 所存放的数据不能超过4k,超过4k返回空字符串
    * 过期时间
        1. 如果一设置，关闭浏览器会自动清除
        2. 设置以后，超过时长自动清除
    * 清除cookie
        1. 浏览器工具
        2. 代码设置，设置过期时间
  3. cookie 一般只有火狐可以直接打开页面进行访问，其他浏览器需要在服务器环境使用

#### js 中如何使用cookie
  1. 设置cookie
    * document.cookie = 'key=value';
      例如：document.cookie='user=kitty';
  2. 设置过期时间
    * document.cookie='user=kitty;expire=Date';
      date:要设置的过期时间
    * var date = new Date();  //创建一个日期
      var nDate = date.setDate(date.getDate()+10);   //往后加10天
      nDate.toGMTString();  //将时间转换成字符串
      document.cookie='user=kitty;expire='+date;
      //setDate()设置一个月的某一天
      //toGMTString()设置世界时字符串
    * var arr = document.cookie.split('; ');//将cookie 转换成数组
