import React from 'react';
import { PropTypes } from "prop-types"//{}自动拆包

//结论：
//当祖先元素中更改了上下文数据，此时所有的子孙元素中的数据都会更改，视图也会更新
//反之不成立，可以认为上下文的数据在后代组件中是只读的，此时又需要使用奇淫技巧，
//在context中共享一个操作祖先组件的函数，让后代组件通过上下文获取这个函数，从而操作祖先元素的值

class MyCompo extends React.Component {
    constructor(props, context) {
        super();
    }

    render() {
        return (
            <div>
                <p>自己组件{this.context.a}<input type="button" value="我是MyCompo组件中的按钮" onClick={() => { this.context.addA(); }} /></p>
            </div>
        )
    }
}

MyCompo.contextTypes = {
    a: PropTypes.number.isRequired,
    addA: PropTypes.func.isRequired
}

//向外暴露
export default MyCompo;