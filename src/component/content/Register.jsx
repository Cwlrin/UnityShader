import React, {Component} from 'react';
import Base from './Base';

/**
 * Register 类继承自 Component，用于实现注册功能的组件。
 * 该类主要负责渲染注册页面的UI。
 */
class Register extends Component {
    /**
     * 初始化组件的状态。
     * 由于当前注册功能的实现不需要维护任何状态，因此状态对象为空。
     */
    state = {}

    /**
     * 渲染注册组件的 UI。
     * 该方法返回一个包含“注册”文字的 Base 组件。
     * @returns {React.Element} 渲染后的 React 元素。
     */
    render() {
        return (<Base>
            注册
        </Base>);
    }
}

export default Register;
