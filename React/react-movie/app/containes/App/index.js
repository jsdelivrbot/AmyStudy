import React,{Component,propTypes} from 'react';
import Home from '../Home/';
class App extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div className="body">
				<Home />
			</div>
		)
	}
}
export default App;