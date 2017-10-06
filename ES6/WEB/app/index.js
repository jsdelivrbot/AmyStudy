import head from './add';
import './css/index.css';//导入Css文件
import './css/iconfont.css';//导入iconfont文件

let imgStr =`<img src=${require('./images/a.png')} >`;
document.body.innerHTML = imgStr;
head();
