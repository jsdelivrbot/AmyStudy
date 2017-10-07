import React,{Component,PropTypes} from 'react';
import {Route,IndexRoute} from 'react-router';
import {Home,App,Detail} from '../containes/';

export default(
	<Route path='/' component={App}>
		<IndexRoute component={Home} />
		<Route path='home' component={Home} />
		<Route path='detail' component={Detail} />
	</Route>

);