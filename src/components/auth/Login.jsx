import React, { useState } from 'react';
import { User } from "../../request/user";
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
    Button,
    IconButton, 
    InputAdornment,
    OutlinedInput,
} from '@mui/material';

const userController =  new User();

export const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleLogin = async () => {
        const data = {
            email,
            password,
        }
        const response = await userController.signIn(data); // Asegúrate de tener un método signIn en tu clase User
        console.log(response);
        response.status === 200
            ? alert("Usuario autenticado")
            : alert("Error al autenticar el usuario");
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

