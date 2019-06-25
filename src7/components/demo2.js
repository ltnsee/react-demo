import { observable, autorun, computed } from 'mobx';
export default function demo2(){
    const value = observable(0);

    // 规定一个规则，返回一个新的被观察的数据
    // 当反复的改变observable观测的值的时候computed就会重新计算
    const boole = computed(() => value >= 0)

    // autorun就是监听computed观测的对象，和observable是一样的
    autorun(() => {
        console.log(`boole is: ${boole.get()}`);
    })

    value.set(2);
    value.set(8);
    value.set(-3);
}