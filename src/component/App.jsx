import React, {Component} from 'react';
import NavBar from './NavBar';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './content/Home';
import Calculator from './content/Calculator';
import Login from './content/Login';
import Register from './content/Register';
import NotFound from './content/NotFound';

/**
 * App 组件继承自 Component，用于构建应用的主容器。
 * 该组件使用 React 的 Fragment 来避免在 DOM 中渲染额外的节点，同时包含导航栏和路由配置，
 * 实现根据不同的 URL 路径渲染不同的组件。
 */
class App extends Component {
    /**
     * 初始化组件的状态。
     * 由于当前组件不需要管理状态，因此状态对象为空。
     */
    state = {}

    /**
     * 渲染方法生成并返回组件的UI。
     * 该方法使用 React 的路由功能（Routes 和 Route）来根据当前 URL 路径动态渲染不同的子组件，
     * 包括 NavBar、Home、Calculator、Login、Register 和 NotFound 组件。
     * 其中，使用 Navigate 组件来处理未匹配到任何路由的情况，将用户重定向到 404 页面。
     * @returns {ReactElement} 组件的渲染结果，包含导航栏和根据路由路径动态变化的内容区域。
     */
    render() {
        return (<React.Fragment>
            <NavBar/>
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/calculator' element={<Calculator/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/404' element={<NotFound/>}/>
                    <Route path="*" element={<Navigate replace to="/404"/>}/>
                </Routes>
            </div>
        </React.Fragment>);
    }
}

export default App;
