#### class(类)
  1. 面向对象编程
    * 类 ：用来声明一个对象的模版
    * 对象：
    * 方法：
    * 属性:
    * 继承:
    * 实例化：
    * 构造方法：constructor 
      1. 使用new 实例化对象时，自动调用构造方法
      2. 一个类，必须有构造方法

 2. ES6引入class概念
 3. 继承
   1. 一个类继承另一个类，并且拥有另一个类的属性和方法
   2. ES6使用extends 关键字继承
   3. super 关键字在构造方法里调用，表示调用父类的构造方法
   4. 先使用super，在调用this才可以

4. 类的静态方法
  * 类中定义的方法，都会被实例继承
  * 如果在方法中加上static 关键词，则表示不会被继承
  * 调用静态方法：直接通过类调用
      ```javascript
      class CatAnimal extends Animal{
        constructor(name){
            super(name);//调用父类的构造方法
            this.name = name;
            this.type = '猫';
            this.age = 12;
        }
        static showAge(){
          console.log(this.age);
        }
      }
      let cat = new CatAnimal('老虎');
      CatAnimal.showAge();/
      ```
  * 父类的静态方法可以被子类继承
5. 静态属性
  * 定义在class 类上的属性，而不是实例化对象上的属性
    ```javascript
    class CatAnimal extends Animal{
      constructor(name){
          super(name);//调用父类的构造方法
          this.name = name;
          this.type = '猫';
          this.age = 12;
      }
    }
    CatAnimal.size = 100 ;//静态属性
    ```

































  111111111111111
