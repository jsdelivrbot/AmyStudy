数组
====
#### 数组
1. 声明数组
    * var arr = ['a','b','c'];
    * var arr = [];
    * var arr = new Array('a','b');

2. 其他类型
    * function
      1. var test = function(){}
      2. var test = new Function(){} //待考究

    * String
      1. new
3. for 循环遍历
4. length 长度

#### 数组基本操作
5. 数组的push  数组末尾添加
    * arr.push(元素)
6. 数组的pop   数组末尾删除
    * arr.pop(); 删除数组的最后一个
7. shift  头部删除
    * arr.shift();
8. unshift 头部添加
    * arr.unshift(元素);
9. join 数组转字符串，按某个字符连接
    * var arr = ['a','b','c'];
      var str = arr.join('-');  将arr数组中的各个元素用-连接起来
10. splice(开始位置，长度，元素)
    * 从开始位置删除几个元素
    * var arr = ['h','e','l','l','o'];
      var str = arr.splice(1,2);   删除e ,l 从下标为1的开始包括自身删除两个
    * 插入
      var str = arr.splice(2,0,'x');  从索引为2的位置插入一个x; 结果  hexllo
    * var str = arr.splice(2,3,'x');  从索引为2的位置，先删除3个元素，再插入'x'; 结果  hex
11. slice(起始位置，结束位置)
    * 取数组的一片,（不包括）结束位置
    * var arr = ['h','e','l','l','o'];
      var str = arr.slice(1,3);    从索引为1的位置开始取2个  

####  
  1. 排序
    * sort()   英文和数字默认为升序排序
    * sort(function(num1,num2)){}使用自定义函数
    * localeCompar()  // 按当地的习惯来排
  2. reverse()  反转数组
    * 1 2 3 4 5 反转以后得到 5 4 3 2 1

#### 数组连接
  1. concat()

#### 数组去重
  1.

#### 中午吃什么
  1. 事件  onclick
  2. setInterval
  3. 随机数
  4. dom 操作
