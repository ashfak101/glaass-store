import { Container, Grid,  Rating,  Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import img from '../../../Images/download.png'


const UserReview = () => {
    const [reviews,setReview]=useState([])

    useEffect(()=>{
        fetch('https://whispering-plains-47367.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>{
           
            setReview(data);
        })
    },[])
    return (
        <Container>
            <h1>Our Customer Feedback</h1>
            <Grid container spacing={2}>
                    {
                      reviews.map(review=>
                        <Grid sx={{m:2}} item xs={12} sm={12} md={2}
                        key={review._id}>
                            <img style={{width:100}} src={img} alt="" />
                            <Typography>{review.UserName}</Typography>
                            <Rating name="disabled" value={review.Rating} disabled />
                            <Typography>{review.review}</Typography>
                        </Grid>
                        
                        )
                    }
            </Grid>
        </Container>
    );
};

export default UserReview;