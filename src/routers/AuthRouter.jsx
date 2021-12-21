import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import LoginPage from '../components/auth/loginPage'
import RegisterPage from '../components/auth/RegisterPage'

const AuthRouter = () => {
    return (
        <div className="auth_main">
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
            <div className="auth_box">
                <div className="auth_square" style={{["--i"]: "0"}}></div>
                <div className="auth_square" style={{["--i"]: "1"}}></div>
                <div className="auth_square" style={{["--i"]: "2"}}></div>
                <div className="auth_square" style={{["--i"]: "3"}}></div>
                <div className="auth_square" style={{["--i"]: "4"}}></div>
                
                <Switch>
                    <Route path="/auth/login" component={LoginPage}></Route>
                    <Route path="/auth/register" component={RegisterPage}></Route>
                    <Redirect to="/auth/login"></Redirect>
                </Switch>
            </div>
            
        </div>
    )
}

export default AuthRouter

