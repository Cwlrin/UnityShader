import React, {Component} from 'react';
import NavBar from './NavBar';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './content/Home';
import Calculator from './content/Calculator';
import Login from './content/Login';
import Register from './content/Register';
import NotFound from './content/NotFound';


class App extends Component {
    state = {}

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
