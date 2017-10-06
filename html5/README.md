#### html5
#### 简介
	1. 新增语义化标签 
	2. 表单进行了扩展
		* email 
	3. 对多媒体进行了增强
		* 音频
		* 视频
		* 绘画  画布
	4. 增强了本地存储
		* 本地存储
		* 会话存储
	5. 移动端
		* 获取电池  陀螺仪 指南针
		* 地理位置


#### html5新增标签 
	1. header 定义页面的头部
	2. nav 导航部分
	3. footer 定义页面的底部
	4. aside 侧边栏
	5. section 对内容进行分区
	6. article 独立的，完整的内容块
 

#### 注意
	1. ie8等ie浏览器不支持html5
	2. 可以使用Js兼容部分ie8
		* html5shiv.min.js  兼容ie8的js 文件 


#### 音频
	1. 创建音频
		* html 方式
			1.  <audio src="source/cehngdu.mp3">
			2.  <audio controls >
					<source src="music.ogg"> type="audio/ogg">
					<source src="music.mp3" type="audio/mpeg">
					您的浏览器不支持audio
				</audio>
		* js 创建 
			1. var music = new Audio();
				music.src = 'music/godbye.mp3';
			    music.play();
			2. var music = new Audio('music/godbye.mp3');
				music.play();
	2. 
		* controls 控制条
		* autoplay 自动播放  (iphone 浏览器不支持)
		* loop 循环播放
		* preload 预加载
	3. js 属性
		1.  music.volume  = number 音量控制  （0-1） 之间  
			* 0 静音

		2.  music.duration //获取音乐总时长  32323.123213m 
			var minu = Math.floor(Math.floor(time));// 音乐的分钟
			var sec = Math.floor(time) % 60;//音乐的秒
		3. currentTime 当前时间
		4. .paused 是否暂停


	4. js 播放音乐方法
		1. .play(); 开始播放
		2. .pause(); 停止播放
	5. 字符串
		1. String.fromCharCode(字符串)
			字符编码转成字符串
	6. js 事件
		1. timeupdate

#### 音乐播放器
	1. audio play 方法 pause
	2. 单个按钮控制音乐播放和暂停
	3. 进度条
	4. 音量条
	5. 按钮 

	6.音乐播放时，获取音乐的当前时间 currentTime

	$('btn').slider({
		orientation:'horizontal',
		max:100,
		value:0,
		slide:function(event,ui){//移动滑块时触发
			music.currentTime = music.duration * (ui.value / 100) ;
			console.log('')
		} ,
		stop:function(event,ui){
			滑块停止时触发
		}
		})