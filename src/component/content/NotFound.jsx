import React, {Component} from 'react';
import Base from './Base';

/**
 * NotFound 类继承自 Component，用于渲染页面中未找到资源的特殊组件。
 * 该类主要负责展示一个基本的404错误页面。
 */
class NotFound extends Component {
    // 初始化状态，该类不需要特定的状态管理，因此状态对象为空
    state = {}

    /**
     * render 方法用于渲染组件。
     * @returns 返回一个包含 "404" 文本的基本组件(Base)。
     */
    render() {
        // 渲染一个基本组件，显示“404”页面
        return (<Base>
            404
        </Base>);
    }
}

export default NotFound;
