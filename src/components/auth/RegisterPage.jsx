import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import validator from 'validator'
import { startRegisterWithEmailPasswordName } from '../../actions/auth'
import { removeError, setError } from '../../actions/ui'
import useForm from '../../hooks/useForm'


const RegisterPage = () => {


    const dispatch = useDispatch();
    const {msgError} = useSelector( sta => sta.ui);

    const [formValues, handleInputChange] = useForm({
        name: '',
        mail: '',
        password: ''
    })
    
    const {name, mail, password} = formValues;
    
    const handleRegister = (e) => {

        if (isFormValid()) {
           dispatch(startRegisterWithEmailPasswordName(mail, password, name));
           console.log('Register ok');
        } 
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('Name is required'));
            return false;
        } else if (!validator.isEmail(mail)) {
            dispatch(setError('Mail is not valid'));
            return false; 
        } else if (password.trim().length < 6) {
            dispatch(setError('Password is not valid, almost 6 characters'));
            return false; 
        }

        dispatch(removeError());
        return true;
    }

    return (
        <div className="auth_container">
            <div className="auht_form">
                <h1>Register</h1>
                <form>
                    <div className="auth_alert-error">
                        {msgError}
                    </div>
                    <div className="auth_inputBox">
                        <input type="text" name="name" id="inp_name" value={name} onChange={handleInputChange} placeholder="Name"/>
                    </div>
                    <div className="auth_inputBox">
                        <input type="email" name="mail" id="inp_mail" value={mail} onChange={handleInputChange} placeholder="Mail"/>
                    </div>
                    <div className="auth_inputBox">
                        <input type="password" name="password" id="inp_password" value={password} onChange={handleInputChange} placeholder="Password"/>
                    </div>
                    <div className="auth_button">
                        <button type="button" className="pointer" onClick={handleRegister}>Create</button>
                    </div>
                    <p className="forget">Have you an account ? <Link to="/auth/login">Log in</Link></p>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage
