import React,{Component,propesType} from 'react';
import './index.css';
class Item extends Component{
	constructor(props){
		super(props)
	}

	render(){
		let src = this.props.src;
		let vtitle = this.props.vtitle;
		let score = this.props.score;
		return(
			<div className="movie-item">
				<img src={src} />
				<h2>
					<p>{vtitle}</p>
					<span>{score}</span>
				</h2>
			</div>
		)
	}
}
export default Item;