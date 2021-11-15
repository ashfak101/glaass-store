import { Alert, Button, CircularProgress, Container, Divider, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useLocation ,useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../Images/login/login.png'
const Login = () => {

    const [registerData,setRegisterData]=useState()
    const {user,loading,loginWithEmailPass} =useAuth();
    //
    const location = useLocation()
    const history=useHistory()
    //
    const   handleOnBlur=e=>{
        const field =e.target.name;
        const value =e.target.value;
        const newData={...registerData};
        newData[field]=value;
        console.log(newData);
        setRegisterData(newData)
    } 

// Sending Data to Firebase
    const handleRegisterSubmit=e=>{
        e.preventDefault();
        loginWithEmailPass(registerData.email,registerData.password,location,history);
        
    }
    if(loading){
        return <CircularProgress color="inherit" />
    }

    return (
        <div>
            
            <Container>
            <h1 style={{textAlign:'left',marginLeft:56,color:'#333'}}>Please login</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                        <form onSubmit={handleRegisterSubmit}>
                                        <TextField
                                        id="outlined-password-input"
                                        label="Email"
                                        name="email"
                                        onBlur={handleOnBlur}
                                        sx={{width:'100%',my:4}}
                                    />
                                    <TextField
                                        id="outlined-password-input"
                                        label="Password"
                                        name="password"
                                        type="password"
                                        onBlur={handleOnBlur}
                                        sx={{width:'100%',mb:2}}
                                    />
                                <Button type="submit" variant="contained">Login</Button>
                        </form>
                        {
                         loading && <CircularProgress color="inherit" />
                             }
                        {
                          user?.email && <Alert severity="success">User login Successfully</Alert>
                        }

                        <NavLink
                           style={{textDecoration:'none'}}
                          to='/register'>
                              <Button variant="text">New User ? Please Register</Button>
                        </NavLink>


                        <Divider sx={{my:3}}/>

                        <Button  variant="contained">Google Login </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                                <img style={{width:'100%'}} src={login} alt="" />
                </Grid>
                </Grid>
                <p>------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
            </Container>

           
        </div>
    );
};

export default Login;