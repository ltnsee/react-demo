
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

class Lifecycle extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            data: 'Old State'
        };
        console.log('constructor: 初始化');
    }

    componentWillMount() {//一般处理异步加载数据
        console.log('componentWillMount: 挂在之前');
    }

    componentDidMount() {
        console.log('componentDidMount: 挂在成功');
    }

    handleClick() {
        console.log('更新state数据');
        this.setState({
            data: 'New State'
        })
    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps: 接收父组件传来的props');
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate: 组件是否应该更新');
        return true;//默认为true，表示组件更新，false表示组件不更新
    }

    componentWillUpdate() {
        console.log('componentWillUpdate: 更新之前');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate: 更新成功');
    }

    componentWillUnmount() {//一般清除占用
        console.log('componentDidCatch: 卸载之前');
    }

    componentDidCatch() {
        // console.log('componentDidCatch: 捕获JavaScript错误');
    }

    render() {

        console.log('render: 渲染的时候');

        return (
            <div>
                <p>我是生命周期</p>
                <p>{this.state.data}</p>
                <button onClick={() => { this.handleClick() }}>改变state</button>
                <p>{this.props.data}</p>
            </div>
        );
    }
}

class FuCompo extends React.Component {

    //构造函数
    constructor(...args) {
        super(...args);
        this.state = {
            data: 'Old Props',
            hasChild: true
        };
    }

    onChangeProps() {
        console.log('更改props数据')
        this.setState({
            data: 'New Props',
        });
    }

    onDestoryChild() {
        console.log('卸载子组件');
        this.setState({
            hasChild: false
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.hasChild ? <Lifecycle data={this.state.data} /> : null
                }
                <p>父组件</p>
                <button onClick={() => { this.onChangeProps() }}>改变props</button>
                <button onClick={() => { this.onDestoryChild() }}>卸载子组件</button>
            </div>
        )
    }
}

ReactDOM.render(<FuCompo />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();