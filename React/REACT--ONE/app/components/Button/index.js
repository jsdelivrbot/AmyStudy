import React ,{Component,PropTypes} from 'react';
import './index.css';
let styleData = {
	borderRadius : '5px',
	width:'50px',
	fontSize :'20px'
}
class Button extends Component{
	constructor(props){
    	super(props);
    };

    // static propTypes = {
    //      size : React.propTypes.string.isRequired,
    // };
    render(){
    	console.log(this.props.size)
    	let size = this.props.size;
    	let clasName = 'btn';
    	if(size == 'sm'){
    		clasName += ' btn-sm';
    	}else{ 
    		clasName += ' btn-xm';
    	}
    	return (
    			// <h1 style={styleData}>这是我的第一个组件</h1>
    			<h1 className = {clasName}>这是我的第一个组件</h1>
    		);
    }
}

export default Button;