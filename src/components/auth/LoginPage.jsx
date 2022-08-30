import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startGoogleLogin, startLoginWithEmailPassword,  } from '../../actions/auth';
import useForm from '../../hooks/useForm';

const LoginPage = () => {


    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.ui)

    const [formValues, handleInputChange] = useForm({
        username: '',
        password: ''
    });

    const { username, password } = formValues;

    const handleLogin = (e) => {
        
        dispatch(startLoginWithEmailPassword(username, password))
        
    }

    const handleGoogleLogin = (e) => {
        dispatch(startGoogleLogin());
    }

    return (
        <div className="auth_container">
            <div className="auht_form">
                <h1>Login</h1>
                <form className='animate__animated animate__fadeIn animate__faster'>
                    <div className="auth_inputBox">
                        <input type="text" name="username" id="inp_username" placeholder="Username" autoComplete="off" values={username} onChange={handleInputChange}/>
                    </div>
                    <div className="auth_inputBox">
                        <input type="password" name="password" id="inp_password" placeholder="Password" values={password} onChange={handleInputChange}/>
                    </div>
                    <div className="auth_button">
                        <button type="button" className="pointer" disabled={loading} onClick={handleLogin}>Login</button>
                        <button type="button" className="pointer" onClick={handleGoogleLogin}><img src="../src/assets/images/search.png" alt="G" className="auth_googleImg"/>Login</button>
                    </div>
                    <p className="forget">Forgot password ? <a href="#">Click here</a></p>
                    <p className="forget">Don't have an account ? <Link to="/auth/register">Sing up</Link></p>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
