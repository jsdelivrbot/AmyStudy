事件
====
#### DOM 事件级别
  1. DOM
    * 所有浏览器都支持
    * 绑定： 使用 on + 事件类型  ：onclick
    * 解绑： on + 事件类型 = null ;
    * 一个元素只能绑定一次同类型的事件
      1. 如果多次 绑定同一类型事件 后面会覆盖前面的
  2. DOM2
    * 绑定：element.addEventLister(type,fn,[useCapture]) ;
      1. type  事件类型  如 click
      2. fn 事件执行的函数  
      3. useCapture 可选，是否使用捕获 返回一个boolean 值
    * 解绑： element.removeEventLister(type,listener,[useCapture]);

  3. 事件目标 (event target)
    * 发生事件的元素
  4. 事件处理函数 (event handler)
    * 处理和响应事件的函数
  5. 事件对象 (event object)
    *  包含特定事件的详细信息   类似一个Json对象
      element.addEventLister('click',function(e){
        e.type//返回事件类型
        e 为一个json对象
        },false)
    * 鼠标位置
      1. clientX 和 clientY
        * 相对于浏览器左上角
      2. pageX 和 pageY
      　* 相对于文档左边缘的 X
        * 相对于文档上边缘的 Y
  6. 鼠标事件
    * onclick 鼠标点击
    * onmouseover 鼠标移入
    * onmouseout 鼠标移出
    * onmousemove 鼠标移动
    * onmouseup 鼠标左键抬起
    * onmousedown 鼠标左键按下

  7. 键盘事件
    * onkeydown 键盘按下
    * onkeyup 按键松开
    * onkeypress 键盘被按下，并被释放的时候发生
    * keyCode 返回按键触发时候的键盘码

 8. 表单事件
   * 文本框等表单控件选中或者选中状态改变时，触发的事件
   * onfocus 获取焦点
   * onblur 失去焦点
   * onchange 内容改变时，触发的事件

9. 模拟select 表单组件
  1. 点击该组件，出现下拉选项
  2. 点击下拉选项 组件显示文本会改变
  3. 点击 空白处，收起下拉选项
  4. 处理事件冒泡 stopPropagation  事件冒泡

10. 事件流或事件传播
  * 描述了浏览器是如何处理事件
   1. 事件冒泡
     * 某个事件默认会向上传播或者冒泡，会触发父元素以及祖先元素上相同的事件
   2. 事件捕获
     * ie8以下版本不支持事件捕获
   3. 阻止事件冒泡
     * e.stopPropagation();

11. 事件冒泡的应用
   *　事件委托
     1. 利用事件会冒泡，而且在冒泡阶段会传播到父元素，可以把处理程序绑定在父元素上
     2. 解决动态创建的元素，无法绑定事件的问题
     3. 节省内存，优化性能
