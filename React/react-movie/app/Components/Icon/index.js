import React ,{Component,PropTypes} from 'react';
import './iconfont.css';
import './index.css';
class Icon extends Component{
	constructor(props){
		super(props);
	}

	static defaultProps = {
		color:'#ffffff',//设置默认值
	};


	render(){
		let type = this.props.type;
		let style = this.props.style;
		let fIcon = `iconfont icon-${type} icon-xs`;
		if(style == 'xs'){
			fIcon = `iconfont icon-${type} icon-xs`;
		}else{
			fIcon = `iconfont icon-${type} icon-ms`;
		}
		return(
			<div className="icon-wrap">
				<i className={fIcon}></i>
			</div>
		)
	}
}

export default Icon ;