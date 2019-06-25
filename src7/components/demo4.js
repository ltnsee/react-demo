import { observable, computed, autorun } from 'mobx';
export default function demo4(){
    // 传入一个数组，就会将数组里的每一项变为被observable观察的的数据
    // 可以使用源生的数组方法
    const value = observable([0]);

    // autorun就是监听observable观测的属性，如果该对象属性发生改变就会执行一次，和observable是一样的
    autorun(() => {
        console.log(`value.length is: ${value.length}`);
    })

    // autorun就是监听observable观测的第一项，如果发生改变就会执行一次，和observable是一样的
    // autorun(() => {
    //     console.log(`value.condition is； ${value[0]}`);
    // })

    // 将observable观察的数组第一项，用computed观察，如果第一项变化first就会变化
    const first = computed(() => value[0]);

    // 就上边的解释如果first发生变化就会执行，也可以看做是computed的简单应用吧
    autorun(() => {
        console.log(`first is: ${first.get()}`);
    })

    value[0] = 1;
    value.push(2);
    value.push(3);

    value.splice(0, 1);
}