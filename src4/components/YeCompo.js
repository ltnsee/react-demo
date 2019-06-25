import React from 'react';
import PropTypes from 'prop-types';
import FuCompo from './FuCompo.js';

class YeCompo extends React.Component{
    
    //构造函数
    constructor(){
        super();
        this.state={
            a:100
        }
    }
    //设置自己的a值，这个函数要进入上下文的通道中
    addA(){
        this.setState({a:this.state.a+1})
    }

    render(){
        return (
            <div>
                <p>爷爷组件{this.state.a}<input type="button" value="我是YeCompo组件中的按钮" onClick={ (this.addA).bind(this)} /></p>
                <FuCompo></FuCompo>
            </div>
        )
    }
    //得到后代组件的上下文,实际上这里表示一种设置,返回现在这个家族的共享上下文
    //将上下文中的a变为自己状态中的a
    getChildContext(){
        return{
            a:this.state.a,
            addA: (this.addA).bind(this)
        }
    }
}
//设置上下文类型
YeCompo.childContextTypes = {
    a: PropTypes.number.isRequired,
    addA: PropTypes.func.isRequired,//func表示为函数类型
}

//向外暴露
export default YeCompo;