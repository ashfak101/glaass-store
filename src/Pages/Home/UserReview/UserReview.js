import { Container, Grid,  Rating,  Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import img from '../../../Images/download.png'
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);
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
        <Container style={{margin:'40px auto'}}>
            <h1>Our Customer Feedback</h1>
            <Grid container spacing={2}>
                     <Swiper
                          effect={"coverflow"}
                          autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                          grabCursor={true}
                          centeredSlides={true}
                          slidesPerView={"auto"}
                          coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                          }}
                          pagination={true}
                        
                        
                        >
                    {
                      reviews.map(review=>
                        <SwiperSlide  style={{border:'1px solid black',width:400,height:300,textAlign:'center'}}
                        key={review._id}> 
                            <img style={{width:100,marginLeft:150}} src={img} alt="" />
                            <Typography>{review.UserName}</Typography>
                            <Rating name="disabled" value={review.Rating} disabled />
                            <Typography>{review.review}</Typography>
                        </SwiperSlide>
                        
                        )
                    }
                    </Swiper>
            </Grid>
        </Container>
    );
};

export default UserReview;