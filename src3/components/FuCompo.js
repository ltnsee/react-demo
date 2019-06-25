import React from 'react';
import MyCompo from './MyCompo.js';

//此时就相当是和MyCompo的父组件
//props就是定义在自定义组件标签上面的值，当props改变的时候，会引发Virtual DOM的改变，从而引发视图的重绘

class FuCompo extends React.Component{
    
    //构造函数
    constructor(){
        super();

        this.state = {
            d:16
        }
    }
    //父组件定义一个函数，通过props属性传给子组件，
    setD(number){
        this.setState({d:number});
    }

    render(){
        return (
            <div>
                <p>我是FuCompo组件，我有一个d状态：{this.state.d}</p>
                <MyCompo a="66" b="77" c={88} d={this.state.d} setD={(this.setD).bind(this)}>
                    我是props.children。。。
                </MyCompo>
            </div>
        )
    }
}

//向外暴露
export default FuCompo;