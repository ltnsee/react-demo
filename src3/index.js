import React from 'react';
import ReactDOM from 'react-dom';
import FuCompo from "./components/FuCompo.js";//引入组件
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<FuCompo />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();