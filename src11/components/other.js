import React from 'react';

const Other = props => {
    return (
        <div>
            我是使用React.lazy()方法import到父组件里的：
            const Other = lazy(() => import('./other'));
        </div>
    );
}
export default Other;