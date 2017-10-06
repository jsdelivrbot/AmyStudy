#### ES6函数
  1. 函数默认值
    * ES6新增了函数的默认值 ，如果不传实参，会默认使用定义的参数默认值
    * 减少报错，报错越少，做判断越少
    ```Javascript
    function add(x = 0,y = 0){
      console.log(x+y);
    }
    add();
    ```
  2. 扩展运算符 ...
    * 可以将数组转为 逗号 分隔的参数序列
      ```Javascript
          console.log(...[1,2,3])
      ```
    * 在给函数传参时，展开数组
    ```Javascript
    //给函数传参时
    function test(x,y,z){
      console.log(x+y+z);
    }

    test(...[1,2,3]);

    ```

    * 合并数组
      ```Javascript
        let arr1 = [1,2,3,4];
        let arr2 = [5,6,7,8];

        let arr = [];
        //需要合并的数组用逗号隔开  
        arr = [...arr1,...arr2];
        console.log(arr);
      ```
    * 数组操作中使用 将一个数组push到另一个数组
      ```Javascript
        let s1 = [1,2,3,4];
        let s2 = [5,6,7];
        s1.push(...s2);
        console.log(s1);
      ```
    * 字符串转数组  
      ```Javascript
         let str = 'hello';
         let arr = [...str];
         console.log(arr);
      ```

   3. 箭头函数
    * ES6允许使用箭头 => 定义函数
      ```Javascript
        // 函数名，参数，函数体
        let add = (x,y) => {console.log(x+y)}
      ```
    * 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象

































111111111111111
