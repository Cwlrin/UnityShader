import React, {Component} from 'react';
import {Link} from 'react-router-dom';

/**
 * 导航条组件类。
 * 继承自 Component，用于渲染网页的导航条部分。
 */
class NavBar extends Component {
    // 初始化组件状态
    state = {}

    /**
     * 渲染导航条。
     * @returns {JSX.Element} 返回一个导航条的JSX元素。
     */
    render() {
        // 返回一个包含导航链接和控制导航条展开/收起按钮的 JSX 元素
        return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Web</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="navbar-brand" to="/home">首页</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand" to="/calculator">计算器</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="navbar-brand" to="/login">登录</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand" to="/register">注册</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>);
    }
}


export default NavBar;
