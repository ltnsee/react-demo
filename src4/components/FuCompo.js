import React from 'react';
import PropTypes from 'prop-types';
import MyCompo from './MyCompo.js';


class FuCompo extends React.Component{
    
    //构造函数
    constructor(){
        super();

    }

    render(){
        return (
            <div>
                <p>父组件</p> 
                <MyCompo></MyCompo>
            </div>
        )
    }
}

// FuCompo.contextTypes = {
//     a: PropTypes.number.isRequired
// }

//向外暴露
export default FuCompo;