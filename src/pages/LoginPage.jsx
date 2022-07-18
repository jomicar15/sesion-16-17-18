import React from 'react'
import LoginFormik from '../components/pure/forms/LoginFormik';
import '../css/loginFormik.css'

const LoginPage = ({loggin}) => {
    return (
        <div className='loginFormik'>
            <LoginFormik loggin={loggin}></LoginFormik>
        </div>
    );
}

export default LoginPage;
