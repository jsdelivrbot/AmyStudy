import React ,{Component,PropTypes} from 'react';
import './index.css';
class Publish extends Component{
	constructor(props){
		super(props);
		this.state = {
			name :"请输入用户名",
			msg:"内容"
		}
	}
	handleClick(){
		let dData = {
			"id":Math.random(),
			"name" : this.state.name,
			"msg":this.state.msg
		};
		this.props.pubTxt(dData);
	}
	//修改用户名
	changeName(e){
		this.setState ({
			name : e.target.value
		});
	}
	//修改内容
	changeMsg(e){
		this.setState({
			msg:e.target.value
		})
	}
	render(){
		return(
					<form className="form">
						<div className="inp-list">
							<label>用户名</label>
							<input type="text" 
								className="user"
								ref="name"
								value={this.state.name}
								onChange={this.changeName.bind(this)}
								/>
						</div>
						<div className="inp-list">
							<label className="inp-con">内容</label>
							<textarea
							 ref="containt"
							 value={this.state.msg}
							 onChange={this.changeMsg.bind(this)}
							 ></textarea>
						</div>
						<p 
							className="pub-btn" 
							onClick={this.handleClick.bind(this)}
							>发布</p>
					</form>
			);
	}

}
export default Publish;