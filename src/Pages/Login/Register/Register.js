import { Alert, Button, CircularProgress, Container, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import login from '../../../Images/login/login.png'

const Register = () => {
        const [registerData,setRegisterData]=useState()
        const [error,setError]=useState(false)
        //
            const {user,emailPasswordSignUp,loading,autbError}= useAuth();
        // 
        const history=useHistory();
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
            if(registerData.password!==registerData.password2){
                setError(true)
            }
            emailPasswordSignUp(registerData.email,registerData.password,registerData.name,history)
            
        }

    return (
        <div>
             <Container>
            <h1 style={{textAlign:'left',marginLeft:56,color:'#333'}}>Please Register Here</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                
                <form onSubmit={handleRegisterSubmit}>
                    <TextField
                        id="outlined-password-input"
                        label="Name"
                        name="name"
                        onBlur={handleOnBlur}
                        sx={{width:'100%',my:4}}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Email"
                        name="email"
                        onBlur={handleOnBlur}
                        sx={{width:'100%'}}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        name="password"
                        type='password'
                        onBlur={handleOnBlur}
                        sx={{width:'100%',my:4}}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Re Type Your Password"
                        name="password2"
                        type='password'
                         onBlur={handleOnBlur}
                        sx={{width:'100%',mb:2}}
                    />
                    {
                        error && <Alert severity="success" sx={{mb:3}}>Your Password Did not match</Alert>
                    }
                    <Button type ='submit' variant="outlined" sx={{width:'50%',m:1,borderColor:'#713095'}}>Submit</Button>
                      
                    </form>
                    {
                        loading && <CircularProgress color="inherit" />
                    }
                    {
                  user?.email && <Alert severity="success" sx={{mb:3}}>User Created Successfully</Alert>
              }
                     {autbError && <Alert severity="error">{autbError}</Alert>}


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

export default Register;