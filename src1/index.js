import React from 'react';
import ReactDOM from 'react-dom';
import Hello from "./components/Hello";//引入组件
import Reaction from "./components/Reaction";//引入组件
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <Hello />
        <Reaction />
    </div>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();