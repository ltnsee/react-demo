import React, { Component, Suspense, lazy } from 'react';
const Other1 = lazy(() => import('./other'));
const Other2 = lazy(() => new Promise(resolve =>
  setTimeout(() =>
    resolve(
      // 模拟ES Module
      {
        // 模拟export default 
        default: function render() {
          return <div>Other2 Component</div>
        }
      }
    ),
    3000
  )
));
class App extends Component {
  render() {
    return (
      <div>
        <h4>一个基本的 lazy 和 suspense 的例子</h4>
        <Suspense fallback={<div>Other1 Loading...</div>}>
          <Other1 />
        </Suspense>
        <h4>一个模拟 lazy 和 suspense 的例子</h4>
        <Suspense fallback={<div>Other2 Loading...</div>}>
          <Other2 />
        </Suspense>
      </div>
    );
  }
}

export default App;