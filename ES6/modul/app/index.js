
import {reduce,add} from './test';//导入多个方法
import Modu from './modu';


let mo = new Modu();
mo.hide();
let rest2 =  reduce(8,7);
console.log('rest2 reduce function '+rest2);

let rest3 = add(1,2);
console.log('rest3 add function '+rest3)
