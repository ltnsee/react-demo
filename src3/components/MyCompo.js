import React from 'react';
import {PropTypes} from "prop-types"//{}自动拆包

//props就是定义在自定义组件标签上面的值，当props改变的时候，会引发Virtual DOM的改变，从而引发视图的重绘
//在子组件中不允许更改父组件传过来的props属性

class MyCompo extends React.Component{
    
    //构造函数
    //此时构造函数会将第一个参数设置为props,
    //在子组件中props是只读的，不能修改props的值，如果要修改，用state接收
    constructor(props){
        super();
        this.state = {
            c:props.c,
            d:props.d
        }
        this.setD = (number)=>{
            this.setState({
                "d":number
            })
            props.setD(number)
        }
        this.add = (number)=>{
            this.setState({
                "d":this.state.d+1
            })
            props.setD(this.state.d+1)
        }
    }


    render(){
        return (
            <div>
                <hr/>
                我是MyCompo组件(FuCompo的子组件)
                <p>a:{this.props.a};</p>
                <p>b:{this.props.b};</p>
                <p>c:{this.props.c};</p>
                <p>d:{this.props.d};</p>
                <p>state.c:{this.state.c};</p>
                <p>
                    <input type="button" value="按我让this.state.c属性改变" onClick={()=>{this.setState({c:this.state.c + 1});}} />
                </p>
                <p>
                    <input type="button" value="按我更改同时改变子组件和父组件中的值一" onClick={()=>{this.props.setD(8)}} />
                </p>
                <p>
                    <input type="button" value="按我更改同时改变子组件和父组件中的值二" onClick={this.add} />
                </p>
                <p>{this.props.children}</p>
            </div>
        )
    }
}
//定义组件需要传入的参数,(就是验证属性是否合法)
//类名打点调用propTypes属性，值是一个JSON.key都是需要传进来的props属性名，value就是对它的限制
MyCompo.propTypes = {
    a: PropTypes.string.isRequired,//a属性是一个歌字符串，并且必传
    b: PropTypes.string,//b属性是一个歌字符串，可以不传
    c: PropTypes.number.isRequired,//c是一个数字，必传
}

//向外暴露
export default MyCompo;