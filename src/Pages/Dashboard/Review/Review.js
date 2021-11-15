import { Alert, Button, Rating, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
const Review = () => {
    const {user} =useAuth();
    const initialInfo={UserName:user.displayName};
    const [review,setReview]=useState(initialInfo)
    const [success,setSuccess]=useState(false)

    const handleonChange=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newInfo={...review}
        newInfo[field]=value;
        setReview(newInfo)
        console.log(newInfo);
    }
    const handleSubmit=e=>{
        axios.post('http://localhost:5000/reviews',review)
        .then(res=>{
            if(res.data.insertedId){
                setSuccess(true)
            }
        })

        e.preventDefault()
    }
    return (
        <div>
            <h1>Give us Review</h1>

            <form onSubmit={handleSubmit}>
                                 <Rating
                                    name="Rating"
                                    
                                    onChange={handleonChange}
                                />
                            
                            <TextField
                                disabled
                                sx={{width: '90%', m:1}}
                                id="outlined-size-small"
                                label="Name"
                              
                               
                                defaultValue={user.displayName}
                                size="small"
                            />
                            <TextField
                                
                                sx={{width: '90%', m:1}}
                                id="outlined-size-small"
                                name="review"
                                label="Review"
                                onChange={handleonChange}
                                size="small"
                            /> <br />
                           
                            <Button type="submit" variant="contained">submit</Button>
            </form>
                             {
                            success &&   <Alert severity="success" sx={{mb:3}}>Your Data Added Successfully</Alert>
                            }

        </div>
    );
};

export default Review;