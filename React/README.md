#### 前端技术流
  1.前后端分离
    * 前端负责展现和交互逻辑
    * 页面 UI 和页面的交互，渲染，用户体验
  　* 后端负责 业务和数据接口
      * 数据存储和业务逻辑，接口，安全
    * 优点：灵活，各端更专注，分工明确，职责分明

#### REACT
  * React 是一个库
  * React 将界面分成很多组件 ，react 中一切都是组件
  * 组件之间可以用结合，嵌套，构成页面
  * 使用了虚似dom 优化性能
  * 一个组件的显示状态和行为，有数据决定  



#### React 组件语法
  1. ES5方式
  2. ES6方式

#### React 中使用样式
  1. 导入样式文件
    ``` JavaScript
      ipmort './index.css';

    ```


#### React Js语法
  1. 不能使用class
  2. 使用className 加类名
    ```HTML


    ```
  3. style方式

#### React 组件的属性， props
  1. props(属性)：可以外部传入参数
  2. 在组件是设置属性
  3. 组件内部通过 this.props.属性名 拿到属性，做逻辑操作，可以改变组件的形态
  4. 有一个默认属性 ，在组件中
  5. 属性类型选择  

    ```JavaScript
        static propTypes = {
             size : React.propTypes.string.isRequired,//要求必须传入一个字符串类型  如果不传则报一个警告错误
        };//此处有分号  属性类型检查
    ```

  6. 外部传进来的属性组件内部无法控制和修改   
      ```JavaScript
          外部：  <Test name="hahah" />
          组件内部： this.props.name = '其他'; //这是不合法的
      ```
#### REACT 技术栈
  1. ES6
  2. AJAX
  3. Node
  4.

  5. 常用Node包
      * axios -------- ajax 库
      * whatwg-fetch ----------- ajax 库
      * mockjs -------  模拟假数据
  6. react 核心库
      * react-router --------  路由库， 跳转页面时应用
      * react-dom   ---------  操作dom的react库


#### REACT 其他
  1. reactjs --------- 开发web
  2. react native -------- 开发app  
  3. 阿里  weex
  4. 使用 vuejs  开发app
  5. 微信小程序



#### 单页面应用-single page application
  1. 常用框架 web端
    * reactJs ------- facebook 开发，注重UI层
    * vueJs  -------- 尤雨溪开发，注重UI层
    * angular ------- google 开发

  2. app 端
    * react-native
    * 阿里的weex
  3. 把整个应用拆分成多个组件，方便复用






#### JSX
  * 基本概念
      1. JSX 是语言的一种扩展，长得像HTML，但不是HTML

          ```JavaScript   
          return (
                <button className={clsName}>{value}</button>
            )
          ```
      2. React 组件可以用 JSX 描述长什么样
      3. JSX 在编译时，会变成相应的js 对象描述
      4. react-dom 负责把编译的js 对象变成 dom 元素，并渲染到页面中

  * JSX的语法规范
      1. 一个组件必须有一个render 方法，必须 返回一个JSX 元素
      2. 必须有一个外层的JSX 元素，把所有内容包裹起来，返回多个并列的多个JSX 元素是不合法的
          想返回一个h标签 和一个p标签，必须用一个div将它们包裹住
      3. 表达式插入
        * 在JSX中可以插入js 表达式，返回的结果会显示到页面中去
        * 表达式用{}包裹，可以放任意的Js代码，包括变量，表达式运算，函数执行
            {1+1} {islike?'喜欢':'不喜欢'}
        * 使用className 添加类名

#### React 中的事件和事件绑定
      1. 元素属性上加onClick 、onKeyDown 等属性
      2. on* 的事件监听，只能用在普通的html标签 上，而不能用在标签上
      3. this的问题
        * react 调用方法时，并不是通过对象的方法调用  this.方法名
        * 需要手动去绑定
          ```JavaScript
            <button  onClick = {this.handleClick.bind(this)}>点击</button>
          ```
        * 如果handleClick是一个有参数的方法，则用逗号与this隔开即可
          ```JavaScript
              handleClick(name){
                console.log(name);
                console.log('被点击了。。。');
              }


              render(){
                return(
                    <button onClick = {this.handleClick(this,'哈哈')>点击</button>}
                )
              }

          ```




#### React组件中的State
    1. state用于组件保存、控制、修改、自己的可变状态，只能在内部自己修改
    2. 外部无法访问，也不能修改
    3. 组件的初始状态 this.state 在组件的构造方法（constructor)中去定义
        ```JavaScript
        this.state = { //组件的初始状态
            isShow : true
        };
        ```
    4. 使用 this.setState 方法更新组件状态
    5. 取值 使用this.state.值的名字
    6. state变化会引起 组件render 方式进行，组件重新渲染


#### React 渲染列表
    1. 常用在文章列表/评论列表
      * data.map(function(dData,index){//遍历

        })
    2. 在遍历生成的Js元素上，都要加上key属性，每个key属性的值 必须唯一  一般来自id





#### React 留言板
  1. 组件划分
    * CommentsApp  总父组件
    * CommentList  留言列表组件
    * CommentInput 输入组件
    * Comment 留言项组件
  2. CommentList 留言列表组件
    * 数据来自外部
    * 渲染和逻辑在在组件内部实现
      * 通过this.props 自定义属性名，获取外部传入的数据
    ```JavaScript
      <CommentList data={msgData} />
    ```
    * 低耦合 高内聚


#### React表单
  * 获取表单数据  
    1. 表单添加 ref 属性
      ```JavaScript
        <input ref="username" type="text" />
      ```
    2. 可以通过 this.refs.username 使用
  * 受控表单组件
    1. 设置了value 的input 就是受控组件
    2. 防止有些数据不通过props控制
    3. input 变为了readonly ，不能修改值
    4. 如果想修改值，需要使用onChange 事件
    5. e.target.value 得到当前元素的value 值
    6. changeName(e){
        console.log(e.target.value);
        this.setState({
            userame:e.target.value;
          })
    }

####React 组件开发 -Icon图标
    * 原理
        1. 根据不同的props 生成不同的的类名
              let ftype = `iconfont icon-${type}`
        2. 根据props 生成style
              let styleData ={
                  color:this.props.color
              }
          * 最终效果：
              Icon type="user" color="red"
        3. 组件的defaultProps设置 某些属性的默认值，用于调用组件的默认值
              static defaultProps = {
                  color:"#666666"
              }


#### React组件 中通信
    1. 父组件与子组件 通信
      * this.props   通过把子组件传入数据和方法
    2. 子组件与父组件 通信
      * 回调函数  父组件通过将定义的方法传入子组件的props ，子组件进行调用
    3.兄弟组件间通信
       * 通过桥梁架接
       



#### React props 高级用法
   * props 可以接收字符串，数字，方法
   * 还可以接收一个组件 或者  JSX
   * 可以将组件的一部分，从组件分离，减少耦合





#### React 组件生命周期
   1. 初始化
      * constuctor
          1. this.state  设置组件的初始状态
   2. 挂载阶段
     * React 将组件 渲染，并且构造dom 元素，然后塞入主页面中的过程，称为组件挂载阶段
        * 挂载方法
          1. componentWillMount()   
                * 组件挂载开始之前 ，调用render 方法之前,dom元素没有插入页面
          2. componentDidMount()  
                * 组件挂载完成之后， dom元素已经插入页面中
                * 一般在此方法中通过 ajax 请求远程数据
  3. 更新阶段
    * 组件在挂载到页面中以后，会响应交互等，根据新的数据，改变自身状态或者形态
    * 例 : 一个新的list组件 ，在新的数据变化时，会变长，加载更多数据 这种阶段称为组件更新阶段
    * shouldComponentUpdate(nextProps,nextState)
        1. nextProps:
        2. 控制组件是否需要重新渲染  返回值为逻辑型    true false
        3. 组件的更新条件：
          * 外部出入新的props
          * 自身的State 发生变化


#### React-router 切换路由
  1. Link 组件 
    * activeHistory 

#### React-router 路由管理库
  1. 路由： 根据不同的网址，展示不同的界面
      * www.xxx.com/Home
      * www.xxx.com/App
  2. hashHistory 有 #   --    localhost:8080/#/detail
     browserHistory 没有# 


#### Redirect 

#### this.props.children
  1. this.props.children 表示所有组件的子节点可以使用React.Children.map来遍历子节点

### react 开发者工具
  react developer tool


#### React 常用的包或者库
  1. material-ui
  2. antd-design 
  3. antd design mobile 
  4. react-bootstrap
  5. react-move (react 官方组件)
  6. react-slick(轮播图组件)

































    1111111111
