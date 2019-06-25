import { observable, computed, autorun, action, useStrict } from 'mobx';

// 相当于严格模式，mobx规定如果是严格模式就必须将所有改变订阅者的操作写在@action里，否则会报错
useStrict(true);

class Foo{
    @observable selected = 0;

    @observable items = [];

    @computed get selectedItem(){
        if(this.selected >= this.items.length){
            return null;
        }
        return this.items[this.selected];
    }

    // @action是mobx当修改被观察的数时所执行的一次操作
    @action addItem(item){
        this.items.push(item);
    }

    // 如果不写@action,mobx会认为做了两步操作，当1️⃣的时候就会去监听一次观测的数据.....
    @action removeAt(id){
        this.items.splice(id, 1);// 1️⃣
        if(this.selected >= id){// 2️⃣
            this.selected --;
        }
    }

    @action removeSelected(){
        this.item.splice(this.selected, 1);
    }
}
export default function demo5(){
    const foo = new Foo(); 

    autorun(() => {
        console.log(`current selected is: ${foo.selectedItem}`);
    })

    foo.addItem(0);
    foo.addItem(1);
    foo.addItem(2);
    foo.addItem(3);

    foo.selected = 2;

    foo.removeSelected();

    foo.removeAt(0);

}