import React,{Component,propsType} from 'react';
import axios from 'axios';
import Item from '../Item';
import './index.css';

class Hotmovie extends Component{
	constructor(props){
		super(props);
		this.state = {
			nodes:[],
			isLoading:true
		}
		// console.log('constructor11')
	}
	// 挂载完成后执行
	componentDidMount(){
		// console.log('componentDidMount')
		let url = '/api/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b';
		axios.get(url)
		.then((result) => {
			// console.log(result)
			let data = result.data;
			this.setState({
				nodes:data.subjects,
				isLoading:false
			});
		})
		.catch(function(error){
			console.log(error)
		})

	}
	//
	hot(){
		console.log('点击了更多热映');
		
	}
	render(){
		// console.log('render...');
		// let {data} = this.state;
		let {nodes, isLoading} = this.state;
		let data = nodes.map(function(dData,index){
			return(
				<Item
	                key={dData.id}
	                src={dData.images.medium}
	                vtitle={dData.title} 
	                score={dData.rating.average}  
               />
			)
		})
		return(
			<div className="hotmovie">
				<div className="hot-list">
					{data}
				</div>
					<div className="clear"></div>
				<div>
				    <div className="more" onClick={this.hot.bind(this)}>更多热映电影</div>
				</div>
				
			</div>
		)
	}
}

export default Hotmovie;