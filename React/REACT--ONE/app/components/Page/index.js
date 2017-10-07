import React,{Component,PropTypes} from 'react';
import Publish from '../Publish/';
import MsgList from '../MsgList/';
let msgData = [
	{"id" :"01","name":"哈哈","msg":"黄河之水天上来"},
	{"id" :"02","name":"杜甫","msg":"奔流到海不复回"},
	{"id" :"03","name":"王维","msg":"黄河之水天上来"},
];
class Page extends Component{
	constructor(props){
		super(props);
		this.state = {
			txt :"杨过",
			comments:msgData
		}
	}
	changeTxt(str){
		this.setState({
			txt:str
		})
	}

	//发布留言
	pubTxt(data){
		msgData.unshift(data);//在数组的前面添加数据 
		this.setState({
			comments:this.state.comments
		})
	}
	render(){
		return (
			<div>
				<Publish 
					clickFn={this.changeTxt.bind(this)}
					pubTxt={this.pubTxt.bind(this)}
					/>
				<MsgList data={this.state.comments} />
			</div>
			);
	}
}
export default Page;