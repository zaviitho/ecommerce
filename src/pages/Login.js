import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from '../redux/actions/loginActions';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import { Button } from '@mui/material';

const Login = ({index}) => {
    const {register, handleSubmit}= useForm()
    const navigate = useNavigate()
    const [message, setMessage]= useState('')
    const dispatch=useDispatch()

    
    const submit = data => {
        console.log(message)
        // dispatch(loginThunk(data))
        //     .then(() => {
        //         setMessage("");
        //         console.log(message)
        //         navigate(-1);
        //     })
        //     .catch(() => setMessage("Invalid credentials"));
    }
    return (
        <div>
            <strong>Welcome! enter your credentials</strong>
            <>
                <p>Test data</p>
                <p><EmailIcon/> mason@gmail.com</p>
                <p><KeyIcon/> mason1234</p> 
            </>

            <form className='login' onSubmit={handleSubmit(submit)}>
            <div className="input-container" >
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            id="email"
                            { ...register("email") }
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" { ...register("password") } />
                    </div>
                    <div className="error-message">{ message }</div>
                    <Button className='button'>
                        Login
                    </Button>
                    <div className="signup">
                        Don't have an account? {" "}
                        <Button type="button" onClick={() => navigate("/signup")}>
                            Sign up
                        </Button>
                    </div>
            </form>
        </div>
    );
};

export default Login;