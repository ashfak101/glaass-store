import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import bg from '../../../Images/Banner/banner.jpg';
import img1 from '../../../Images/swiper/swip1.jpg'
import img2 from '../../../Images/swiper/swip2.jpg'
import img4 from '../../../Images/swiper/swip4.jpg'
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@mui/material';
const bannerBg={
    background:`url(${bg})`,
    backgroundPosition:'center',
    backgroundSize:'cover',
    backgroundRepeat: 'no-repeat',
    
    height: '100vh'
}
const verticalCenter={
    display:'flex',
    alignItems:'center',
    height:500,
    
}

SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);
    

const Banner = () => {
  const theme=useTheme()
  const useStyle=makeStyles({
    bannerItem:{
     
      [theme.breakpoints.down('md')]:{
        width:'400px',
        height:'400px',
        marginTop:'-70px'
        
      }
    },
    bannerText:{
      [theme.breakpoints.down('sm')]:{
        fontSize:'24px'
      },
      [theme.breakpoints.down('md')]:{
        fontSize:'24px'
      }
    },
    bannerSlider:{
      [theme.breakpoints.down('sm')]:{
        marginTop:'-1040px'
      },
      [theme.breakpoints.down('md')]:{
        marginTop:'-1040px'
      }
    }
})
const {bannerItem,bannerText,bannerSlider}=useStyle()
    return (
        <Box style={bannerBg}>
           <Container>
               <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6}  style={{...verticalCenter,textAlign:'left',marginTop:150}}>
                       <Box className={bannerItem}>
                       <Typography variant='h6'sx={{fontWeight:'500', color:'#fff'}} >
                            Unbelievable low prices
                        </Typography>
                        <Typography className={bannerText} variant='h2' sx={{fontWeight:'700',color:'#fff', my:2}}>
                            GLASSES FOR MEN & WOMEN
                        </Typography>
                        <Button variant="contained" sx={{backgroundColor:'yellow' ,color:'#333',px:5}} >Buy Now</Button>
                       </Box>
                       
                    </Grid>
                    <Grid   item xs={12} sm={12} md={6} style={{...verticalCenter,textAlign:'left',marginTop:150}}>
                        <Swiper
                        className={bannerSlider}
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
                         <SwiperSlide>
                          <img src={img1} alt="" />
                        </SwiperSlide>
                         <SwiperSlide>
                          <img src={img2} alt="" />
                        </SwiperSlide>
                         <SwiperSlide>
                          <img src={img1} alt="" />
                        </SwiperSlide>
                         <SwiperSlide>
                          <img src={img4} alt="" />
                        </SwiperSlide>
                        </Swiper>
                    </Grid>
               </Grid>
           </Container>
        </Box>
    );
};

export default Banner;