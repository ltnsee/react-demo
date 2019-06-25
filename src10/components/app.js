import React, { Component, useState, useEffect } from 'react';
// 一个简单的有状态组件
class Test1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
        <h4>一个简单的有状态组件</h4>
        <p>You clicked {this.state.count}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1
            });
          }}
        >
          Click me
        </button>
      </div>
    )
  }
}

// 使用hooks后的版本
function Test2() {
  const [ count, setCount ] = useState(0);
  return (
    <div>
      <h4>使用hooks后的版本</h4>
      <p>You clicked {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
}

// 渲染属性（Render Props）
const Test3Children = (props) => {
  return (
    <div>
      {props.target}
    </div>
  );
}
class Test3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      target: 'Test3'
    }
  }

  render() {
    return (
      <div>
        <h4>渲染属性（Render Props）</h4>
        {this.props.render(this.state)}
      </div>
    )
  }
}

// 高阶组件
const Test4Children = (props) => {
  console.log('Test4Children', props);//{target: "高阶组件: WithComponent", a: "123"}
  return (
    <div>
      {props.target}
    </div>
  );
}
const WithComponent = ChildrenComponent => {
  const target = '高阶组件: WithComponent';
  return props => {
    console.log('WithComponent', props);//{a: "123"}
    return (
      <ChildrenComponent target={target} {...props} />
    );
  }
}
const Test4 = WithComponent(Test4Children);

// 使用Effect hooks后的版本(实现生命周期)
function Test5() {
  const [ count, setCount ] = useState(0);
  // 类似于componentDidMount 和componentDidUpdate
  useEffect(() => {
    // 更新文档的标题
    document.title = `你点击了${count}次`;
  });
  return (
    <div>
      <h4>使用Effect hooks后的版本(实现生命周期)</h4>
      <p>You clicked {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
}
// 对比普通有状态组件的生命周期
class Test6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    document.title = `你点击了${this.state.count}次`;
  }
  componentDidUpdate() {
    document.title = `你点击了${this.state.count}次`;
  }
  render() {
    return (
      <div>
        <h4>对比普通有状态组件的生命周期</h4>
        <p>You clicked {this.state.count}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1
            });
          }}
        >
          Click me
        </button>
      </div>
    )
  }
}

// useEffect怎么解绑一些副作用
// function FriendStatus(props) {
//   const [ isOnline, setIsOnline ] = useState(null);
//   function handleStattusChange(status) {
//     setIsOnline(status.isOnline);
//   };
//   useEffect(() => {
//     ChatAPI.subscribeToFriendStatus(props.friend.id, handleStattusChange);
//     // 一定注意下这个顺序：告诉react在下次重新渲染组件之后，同时是下次调用ChatAPI.subscribeToFriendStatus之前执行cleanup
//     return function cleanup() {
//       ChatAPI.unsubscribeFriendStatus(props.friend.id, handleStattusChange);
//     }
//   })
//   if(isOnline === null) {
//     return 'Loading...';
//   }
//   return isOnline ? 'Online' : 'Offline';
// }


class App extends Component {
  render() {
    return (
      <div>
        <Test1 />
        <Test2 />
        <Test3 
          render={data => {
            return <Test3Children target={data.target} />;
          }}
        />
        <Test4 a="123" />
        <Test5 />
        <Test6 />
      </div>
    );
  }
}

export default App;