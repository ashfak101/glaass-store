import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email,setEmail]=useState('')
    const [success,setSuccess]=useState(false)
    const {token}=useAuth()


    const handleOnBlur=e=>{
        setEmail(e.target.value)
    }
    const handleAdmin=e=>{
        const user={email}
        fetch('http://localhost:5000/users',{
            method: 'PUT',
            headers:{
                'authorization':`Bearer ${token}`,
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                setSuccess(true)
               
            }
        })
        e.preventDefault()
    }
    return (
        <div>
           <h1>Hi Make An admin</h1> 


           <form onSubmit={handleAdmin}>

                    <TextField sx={{width:'50%'}} label="Email" color="secondary"
                        type="email"
                        onBlur={handleOnBlur}
                     />
                    <Button type='submit' variant="contained" sx={{py:2,mx:1}}>Make Admin</Button>

                    {
                     success && <Alert severity="success">Made Admin Successfully</Alert>
                     }
         

           </form>
        </div>
    );
};

export default MakeAdmin;