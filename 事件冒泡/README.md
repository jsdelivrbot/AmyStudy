#### 事件冒泡机制
### 名词解释
	* 
	```HTML
		<div>
			<p>子元素</p>
		</div>
	```
	* 假如div 和 p标签都有onclick 事件，如果用户点击了p标签，两个元素的click事件都触发了，根据事件执行的顺序，总结的机制
	## 事件捕获
		* 从上到下执行，先触发父元素的事件
	## 事件冒泡
		* 从下到上执行，先触发子元素的事件
	

### 事件机制设置
	* 用addEventListener来控制事件的执行顺序
	* ele.addEventListener('click',function(){},true)
		1. true:事件机制的设置
			* true :事件捕获:从上到下
			* false:事件冒泡：从下到上
		2.默认是false 事件冒泡
		 ``` HTML
			<div id="fDiv">
				<p>元素</p>
			</div>
		```
		```JavaScript
			window.onload = function(){
			var oDiv = document.getElementById('fDiv');
			var oP = document.getElementsByTagName('p')[0];
			oP.addEventListener('click',function(){
				alert('点击了p 标签');
			});
			oDiv.addEventListener('click',function(){
				alert('点击了div标签');
			});
			}
		  }
		```
		3.事件捕获
		```JavaScript
			window.onload = function(){
			var oDiv = document.getElementById('fDiv');
			var oP = document.getElementsByTagName('p')[0];
			oP.addEventListener('click',function(){
				alert('点击了p 标签');
			},true);
			oDiv.addEventListener('click',function(){
				alert('点击了div标签');
			},true);
			}
		  }
		```


