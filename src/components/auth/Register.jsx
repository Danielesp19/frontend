import React, { useEffect, useState } from 'react'
import { User } from "../../request/user"
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
    Button,
    IconButton, 
    InputAdornment,
    InputLabel,
    OutlinedInput,
    FormControl,
    MenuItem,
    Select
} from '@mui/material';

const userController =  new User();

export const Register = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowRepeatPassword = () => setShowRepeatPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const [userName, setUsername]= useState("");
    const [lastname, setLastname]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [repeatPassword, setRepeatPassword]= useState("");
    const [role, setRole]= useState("");
    const [activeStatus, setActiveStatus]= useState(false);

    const handleRegister = async () => {
        const data = {
            user_name: userName,
            lastname,
            email,
            password,
            role,
            active_status: activeStatus,
        }
        const response = await userController.signUp(data);
        console.log(response);
        response.status === 201
            ? alert("Usuario registrado")
            : alert("Error al registrar el usuario");
    };

    
    return (
        <>
        <div className='card-register'>
            <TextField 
            id="standard-basic" 
            label="Nombre" 
            variant="standard" 
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            />

            <TextField 
            id="standard-basic" 
            label="Apellidos" 
            variant="standard" 
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            fullWidth
            />
            <TextField 
            id="standard-basic" 
            label="email" 
            variant="standard" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email' 
            fullWidth
            />

        <div className='row-style'>

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

            <OutlinedInput
            id="repeatPassword"
            type={showRepeatPassword ? 'text' : 'password'}
            onChange={(e) => setRepeatPassword(e.target.value)}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowRepeatPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    >
                    {showRepeatPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
                }
                label="Password"
                value={repeatPassword}
            />
        </div>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Rol</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    label="Rol"
                    onChange={(e) => setRole(e.target.value)}
                >
                    <MenuItem value={10}>Admin</MenuItem>
                    <MenuItem value={20}>Guest</MenuItem>
                    <MenuItem value={30}>Client</MenuItem>
                </Select>
            </FormControl>

            <Button 
                variant="contained"
                disableElevation
                onClick={handleRegister}
                >
                Registrar usuario
            </Button>
        </div>
        </>
    )
}