import React,{Component,PropTypes} from 'react';
import './index.css';
class Test extends Component{
	constructor(props){
		super(props);
		this.state = {
			isShow : true
		}
	}

	handleClick(){
		this.setState ({
			isShow : !this.state.isShow
		});
		console.log(this.state.isShow);
	}
	render(){
		return (
			<div>
				<button className='btn' onClick={this.handleClick.bind(this)}>按钮</button>
				<p className={this.state.isShow ? 'contan con-show': 'contan con-hide'}>内容</p>
			</div>
			);
	}
}

export default Test;