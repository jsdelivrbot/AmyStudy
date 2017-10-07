//入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containes/App/';
import {Router,hashHistory} from 'react-router';
import Routes from './routes/';
const rootEl = document.getElementById('app');

ReactDOM.render(<Router history={hashHistory} routes={Routes} ></Router>, rootEl);
