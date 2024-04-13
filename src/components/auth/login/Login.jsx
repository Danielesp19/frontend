import React, { useState } from 'react';
import { User } from "../../../request/user";
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import "./Login.css"
import {
    Button,
    IconButton, 
    InputAdornment,
    OutlinedInput,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';


const userController =  new User();

export const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleLogin = async () => {
        const data = {
            email,
            password,
        }
        const response = await userController.signIn(data); 
        console.log(response);
        if (response.status === 200) {
            alert("autentitcacion exitosa");
            navigate('/dashboard'); 

        } else {
            alert("Error en el usuario o contraseña ");
        }
    };

    return (
        <div className='card-login'>
            <TextField 
            id="standard-basic" 
            label="email" 
            variant="standard" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email' 
            fullWidth
            />

            <OutlinedInput
            id="password"
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
                }
                label="Password"
                value={password}
            />

            <Button onClick={handleLogin} variant="contained">Iniciar sesión</Button>
        </div>
    );
};

