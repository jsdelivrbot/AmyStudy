import React,{Component,PropTypes} from 'react';
import './index.css';
import Icon from  '../Icon/';
class TabBar extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="tab-bar">
				<div className="flex-wrap">
					<div className="flex-1 text-center">
						<Icon type="list" style="ms" />
					</div>
					<div className="flex-2 text-center">
						<span>芝麻电影</span>
					</div>
					<div className="flex-1 text-center">
						<Icon type="search" style="ms"/>
					</div>
					<div className="flex-1 text-center">
						<Icon type="person" style="ms"/>
					</div>
				</div>
			</div>
		)
	}
}

export default TabBar;