import React,{Component,propsType} from 'react';
import axios from 'axios';
import Item from '../Item/';
import './index.css';
class Newmovie extends Component{
	constructor(props){
		super(props);
		this.state = {
			data : [],
			start : 0,
			count : 12
		}
	}

	componentDidMount(){
		console.log('start   ' + this.state.start)
		console.log('count   ' + this.state.count)
		let url = '/api/movie/coming_soon?apikey=0b2bdeda43b5688921839c8ecb20399b&start='
		+this.state.start+'&count='+this.state.count;
		axios.get(url)
		.then((result)=>{
			let data = result.data;
			console.log(result);
			this.setState({
				data:data.subjects
			})
		})
		.catch((error)=>{
			console.log(error);
		})
	}
	//点击更多
	more(){
		console.log('点击了更多');

	}
	render(){
		let {data} = this.state;
		let nodes = data.map(function(dData,index){
			return (
				<Item
					key={dData.id}
	                src={dData.images.medium}
	                vtitle={dData.title} 
	                score={dData.rating.average}  
	            />
			)
		})
		return(
			<div className="Newmovie">
				<div className="Newmovie-list">
					{nodes}
				</div>
				<div className="more" onClick={this.more.bind(this)}>
					更多即将上映电影
				</div>
				<div className="clear"></div>
				<div className="kong"></div>
			</div>
		)
	}
}

export default Newmovie;