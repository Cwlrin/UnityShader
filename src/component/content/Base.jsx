import React, {Component} from 'react';

/**
 * Base 类继承自 Component，用于创建一个基本的组件结构。
 * 该类主要负责定义组件的渲染逻辑。
 */
class Base extends Component {
    /**
     * 初始化组件的状态。
     * 状态是一个空对象，可以在组件的生命周期内根据需要进行更新。
     */
    state = {}

    /**
     * 渲染函数定义了组件在屏幕上的输出。
     * 它返回一个 JSX 元素，这里是一个带有特定样式的 div，用于包裹组件的内容。
     *
     * @returns {JSX.Element} 返回一个 JSX 元素，用于在浏览器中渲染。
     */
    render() {
        // 使用 className 和 style 属性定义组件的外观和布局。
        // 使用 this.props.children 来渲染组件内部的内容，这允许子组件动态地向该组件传递内容。
        return (<div className="card" style={{marginTop: "20px"}}>
            <div className="card-body">
                {this.props.children}
            </div>
        </div>);
    }
}

export default Base;
