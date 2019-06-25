import { observable, autorun } from 'mobx';
export default function demo3(){
    // 传入一个对象，因为foo和bar是普通类型所以会自动变成被observable观察的数据，就相当于定义的是foo = observable(0)
    // 由于condition是一个get就会默认是一个computed观察的数据
    // 取对应的值就和普通的对象一样
    const value = observable({
        foo: 0,
        bar: 0,
        get condition(){
            return this.foo >= 0;
        }
    });

    // autorun就是监听observable观测的对象成员，如果该对象成员发生改变就会执行一次，和observable是一样的
    autorun(() => {
        console.log(`value.foo is: ${value.foo}`);
    })

    autorun(()=> {
        console.log(`value.condition is； ${value.condition}`);
    })

    value.foo = 2;
    value.foo = 8;
    value.foo = -3;

    value.bar = 1;
    value.bar = 2;
}