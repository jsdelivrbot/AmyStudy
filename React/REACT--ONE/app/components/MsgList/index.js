import React,{Component,PropType} from 'react';
import './index.css';

class MsgList extends Component{
	render(){
		console.log(this.props.data);
		let nodes = this.props.data.map((dData,index) => {
			return (
				<li key = {dData.id} className="msg-list">
					<span className="msg-title">{dData.name}</span>
					<p className="msg-con">{dData.msg}</p>
				</li>
				)
		});

		return (
			<ul>
				{nodes}
			</ul>
			)
	}
}

export default MsgList;