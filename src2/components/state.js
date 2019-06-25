import React from 'react';


//React把组件看成一个状态机。通过与用户的交互，实现不同状态，然后渲染UI,让用户界面和数据保持一致
//只需要更新组件的state,然后根据新的state重新渲染用户界面（不要操作DOM）

//定义：this.state
//使用：{this.state}
//改变：this.steState({a:this.state.a+1);不能写++，因为state属性值只读
//（a++是先执行a+1在赋值给a本身，a+1没有将a的值改变）
//a++ 和 ++a的相同点都是给a+1，不同点是a++是先参加程序的运行再+1，而++a则是先+1再参加程序的运行。
//var a=1;console.log(a++);//1 a=2    var b=1;console.log(++b);//2 b=2

//stat是内部的（也叫localstate），只有组件自己能改变自己的sate,别人不能改变
class State extends React.Component{
    
    //构造函数
    constructor(){
        super();
        this.state = {
            a: 100,
            b: 200,
            c: 300
        }
    }

    add(){
        this.setState({a: this.state.a+1})//这里要用setState()
    }
    render(){
        let b = 99;
        return (
            <div>
                <p>我有state状态。。。</p>
                <p>a: {this.state.a}</p>
                <p>b: {this.state.b}</p>
                <p>c: {this.state.c}</p>
                <p>
                    <input type="button" value="按我让a值加1" onClick={(this.add).bind(this)} />
                </p>
            </div>
        )
    }
}

//向外暴露
export default State;