import React, {Component} from 'react';
import Base from './Base';

/**
 * 登录组件
 *
 * 该组件继承自 Component，用于渲染登录页面的用户界面。
 * 它不维护任何内部状态，因为登录过程的状态管理由父组件负责。
 */
class Login extends Component {
    // 初始化组件状态
    state = {}

    /**
     * 渲染登录组件
     *
     * 该方法返回一个包含登录界面的基础组件(Base)。
     * 它不接受任何参数，返回一个 JSX 元素。
     */
    render() {
        // 渲染基础组件，展示登录文字
        return (<Base>
            登录
        </Base>);
    }
}

export default Login;
