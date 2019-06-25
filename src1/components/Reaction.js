import React from 'react';

//我们可以在组件的类定义里面写constructor构造器，里面定义this.a=100,表示给组件的实例绑定一个a属性，值是100.
//在jsx中使用的时候，直接this.a即可
class Reaction extends React.Component{
    
    //构造函数
    constructor(){
        super();//必须写
        this.a =100;
    }

    add(){
        this.a++;//这里的this指向 Reaction这个类的实例对象，当点击按钮调用这个方法的时候，this指向调用这个方法的对象，应为这个对象没有a属性，所以要用bind()方法改变函数内部的this指向
        alert('a:'+this.a+'我是构造函数中定义的a属性,我真的变了幺，只不过视图没变而已！');
    }
    //bind 方法会指定this指向，并不会刺激函数执行
    //a和b是值真的改变了但是页面上并没有改变
    //组件自己身上的属性改变，视图中的值是不会随着改变
    render(){
        let b = 99;
        return (
            <div>
                <p>{this.a}</p>
                <p>{b}</p>
                <p>
                    <input type="button" value="按我" onClick={(this.add).bind(this)} />
                </p>
                <p>
                    <input type="button" value="按我" onClick={()=>{b++;alert('b:'+b+'我是render方法中的局部变量，我真的变了幺，局部变量也不会使视图发生改变！');}} />
                </p>
            </div>
        )
    }
}

//向外暴露
export default Reaction;