import { observable, autorun } from 'mobx';
export default function demo1(){
    // 只读的，用get和set获取和设置对应的值
    const value = observable(0);

    // autorun就是监听observable观测的对象，当值变化的时候就会执行这个函数（包括初始化的时候）
    autorun(() => {
        console.log(`value is: ${value.get()}`);
    })

    value.set(2);
    value.set(8);
    value.set(-3);
}