import React, {Component} from 'react';
import Base from './Base';

/**
 * Home 组件类
 * 继承自 Component，用于构建首页的UI组件
 */
class Home extends Component {
    /**
     * 初始化组件的状态
     * 空对象表示初始状态为空，可根据实际需要在组件生命周期中动态修改状态
     */
    state = {}

    /**
     * 渲染函数
     * 负责将组件渲染到屏幕上的函数，返回需要展示的 React 元素
     * @returns {React.Element} 返回一个 React 元素，这里是一个名为 Base 的组件，用于展示首页内容
     */
    render() {
        // 使用 JSX 语法创建并返回一个 Base 组件，用于显示"首页"内容
        return (<Base>
            首页
        </Base>);
    }
}

export default Home;
