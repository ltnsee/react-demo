import React from 'react';
import { observble, observer } from 'mobx';

const counter = observble(0);

function inc() {
    counter.set(counter.get() + 1);
}

function dec() {
    counter.set(counter.get() - 1);
}

@observble
class Counter extends React.Component {
    render() {
        return (
            <div>Counter</div>
        );
    }
}
export default Counter;