import React from 'react';//react库
import ReactDOM from 'react-dom';//react操作dom的库
import Page from './components/Page/';
import {Router, hashHistory, browserHistory} from 'react-router';

const rootEl = document.getElementById('app');
let src = 'xm';

ReactDOM.render(<Page />, rootEl);