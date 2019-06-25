import React from "react"
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

class A extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {

        };
    }

    render() {
        return (
            <div>这是A组件</div>
        );
    }
}

class B extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {

        };
    }

    render() {
        return (
            <div>这是B组件</div>
        );
    }
}

class Wrapper extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <Link to="/a">A组件</Link><br />
                <Link to="/b">B组件</Link><br />
                <Link to="/a">A组件</Link><br />
                {this.props.children}
            </div>
        );
    }
}

ReactDOM.render(
    <Router>
        <Wrapper>
            <Route path='/a' Component={A} />
            <Route path='/b' Component={B} />
        </Wrapper>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();