import React from 'react';

//定义一个叫做Hello的组件，在HTML中可以用<Hello></Hello>来使用它
//React要求自定义组件必须是大写字母开头，如果小写将默认为原生html标签
//React要求自定义的类必须继承于React.Component类
class Hello extends React.Component{
    show(){//定义在类里边的函数
        return (
            <h1>你能看见我吗？</h1>
        )
    }
    //组件中最重要的方法是render方法，render是渲染的意思
    render(){
        //定义一个数组,会自动展开
        let a = ['红桃','黑桃','梅花','方片']
        //定义一个数组，返回一个新的数组在这里结合jsx语法
        let arr = ['红桃','黑桃','梅花','方片'].map((itme,index)=>{
            return <li key={index}>{itme}</li>
        })


        //返回一个jsx语法注意点：
        //必须在一个标签内<div>...</div>
        //标签必须封闭 <b></b>,<img src="" />
        //class必须写成className
        //for必须写成htmlFor
        //只能使用js注释
        //jsx中可以用{}表示临时插入一个js简单表达式，不能是if、for等复杂结构，可以用&&、||、？：、调用函数
        //return <h1>我是React，很高兴遇见你！说爱你{5000+5000}年！</h1>
        //自定义标签可以随便添加属性xxx="",如果是原生标签自定义属性必须用data-xxx=""
        return (
            <div>
                <h1>我是React，很高兴遇见你！说爱你{5000+5000}年！</h1>
                <h1>三大与八吗？答：{3>8 ? '嗯嗯' : '你心里没点逼数吗？'}</h1>
                <h1 className="ltns">好久不见，最近好吗？</h1>
                <div style={{"width":"100px","height":20+30+"px","background":"red"}}></div>
                {this.show()}
                <ul>
                    <li>{a}</li>
                </ul>
                <ul>{arr}</ul>
            </div>
        )
    }
}

//向外暴露
export default Hello;