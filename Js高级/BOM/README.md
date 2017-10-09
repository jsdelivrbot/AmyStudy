BOM
====
  1. BOM 浏览器对象模型
     B ----------  browser 浏览器
     O ----------  object 对象
     M ----------  model 模型
    * 简明理解：浏览器提供给开发者的js接口
  2. 核心对象 window
    * 所有的全局变量和全局函数都在window上，window对象相当于js的全局变量
    * 通过js访问浏览器的接口


#### window 对象
  1. window.alert(提示内容) 警告框

  2. window.cofirm(提示内容)  对话框
    * 用户点击确认，返回Ture
    * 用户点击取消，返回false
  3. window.prompt('text');  输入框
    * 点击确认，输入文本
    * 点击取消，返回 null
  4. window.open(pargeurl,name,param)
    * pargeurl 要打开的网页地址 http://baidu.com
    * name 窗口的名字  随意写
    * param 窗口参数 ，每个参数以逗号隔开
      1. width
      2. height
      3. left
      4. top 后面不用加单位
  5. 常用方法
    * window.onload 页面加载
    * window.onunload 页面卸载
    * window.onscroll 滚动条滚动的时候触发
    * window.onresize 浏览器窗口缩放

#### 滚动距离
  1. document.body.scrollTop 获取滚动条滚动的高度 返回的是一个数字
    * chrome等标准浏览器
  2. document.documentElement.scrollTop
    * ie 浏览器
  3. 兼容
  　* || 或
    * 或 前面如果是false  执行或 后面的语句，否则，直接执行前面的语句
  4. 返回顶部
    * 锚点
      1. <div id="top">这是顶部</div>
         <a href="#top">返回顶部</a>
    * 动画方式
      1. setInterval
      2. 不断改变scrollTop 的值 到0

  5. 运动原理
    * 匀速运动： 当前的值 -固定的值（speed)
    * 缓冲运动： 当前的值 - 不断变化的值 （speed）

####  定时器
  * setInterval
  * setTimerout

#### location 对象
  * 获取当前访问网页的信息
  location.href = '跳转的链接'
  location.hash  用于页面内跳转 获取的是字符串 为 '#××××'

    1. 页面导航
  * location.host 服务器名称和端口号
  * location.hostname 不带端口号的服务器名称
  * location.search 返回查询字符串，包括问号
  * location.port 端口号
  * location.reload() 当前页面重新加载

#### history对象
  1. 历史记录对象 js操作浏览器历史记录的接口
  2. history.forward() 前进
  3. history.back()  后退 回到历史记录的上一步
  4. history.go(n)  回到第n步
     当n=-1时  等同于history.back()
     当n=1 时  等同于history.forward()


#### navigator 对象
  1. userAgent(用户代理): 获取一些客户端浏览器信息  名称 引擎 操作系统
  2. appCodeName  浏览器的字符串表示
  3. appName 浏览器名称
  4. appVersion 浏览器版本
  5. platform 操作系统
  6. 应用： 返回用户浏览器等信息
    * indexOf(String)  字符串方法  : 返回 string 首次出现的索引
      例如： var m = 'hello kitty'
      m.indexOf('l') 值为2  找不到则为-1

#### 遮罩弹层
  1. 定位  fixed
  2. opacity
  3. 相对于可视区  水平 垂直居中
    * 弹层打开时，水平垂直居中
    * 浏览器缩放时，水平垂直居中   onresize
  4. 遮罩层覆盖整个页面高度
     1. 可视区尺寸
      * 宽度  document.documentElement.clientWidth
      * 高度  document.documentElement.clientHeight
     2. 文档尺寸
      * document.documentElement.scrollWidth
      * document.documentElement.scrollHeight
  5. 点击按钮打开 或 关闭
  6. 一个div 相对于可视区  水平垂直 居中
    1. js 做法
      * 距离左侧left = （可视区的宽度 - 元素的宽度）/ 2
      * height = (可视区的高度 - 元素的高度) / 2
