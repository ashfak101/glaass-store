import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../Images/Banner/banner.jpg'

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

const Banner = () => {
    return (
        <Box style={bannerBg}>
           <Container>
               <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} style={{...verticalCenter,textAlign:'left',marginTop:150}}>
                       <Box>
                       <Typography variant='h4'sx={{fontWeight:'500', color:'#fff'}}>
                            Unbelievable low prices
                        </Typography>
                        <Typography variant='h2' sx={{fontWeight:'700',color:'#fff', my:4}}>
                            GLASSES FOR MEN & WOMEN
                        </Typography>
                        <Button variant="contained" sx={{backgroundColor:'yellow' ,color:'#333',px:5}} >Buy Now</Button>
                       </Box>
                       
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                    <Typography variant='h4'>
                            
                        </Typography>      
                    </Grid>
               </Grid>
           </Container>
        </Box>
    );
};

export default Banner;