import { Container,Typography, Grid, TextField, Divider } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{backgroundColor:'#181038',color:'#fff',marginTop:10}} >
            <Container>
            <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={3} sx={{textAlign:'left'}}>
                        <Typography sx={{ fontWeight:600,mt: 4, mb: 2, }} variant="h6" component="div">
                        Los Angeles
                    </Typography>
                    
                         <Box>

                             <Typography sx={{fontSize:13,mb:1}}>254 Roselen de Square
                                Century Street <br /> Haven Tower
                                Los Angeles, USA</Typography>
                                <Typography sx={{fontSize:12,mb:1}}>01254 658 987, 02365 987 456</Typography>
                                <Typography sx={{fontSize:12,mb:1}}>info@example.com
                                www.example.com</Typography>
                         </Box>
                       
            
          
                 </Grid>
                    <Grid item xs={12} sm={12} md={3} sx={{textAlign:'left'}}>
                        <Typography sx={{ fontWeight:600,mt: 4, mb: 2, }} variant="h6" component="div">
                        Manchester
                    </Typography>
                    
                         <Box>

                             <Typography sx={{fontSize:13,mb:1}}>254 Roselen de Square
                                Century Street <br /> Haven Tower
                                Los Angeles, USA</Typography>
                                <Typography sx={{fontSize:12,mb:1}}>01254 658 987, 02365 987 456</Typography>
                                <Typography sx={{fontSize:12,mb:1}}>info@example.com
                                www.example.com</Typography>
                         </Box>
                        
            
          
                 </Grid>
                    <Grid item xs={12} sm={12} md={3} sx={{textAlign:'left'}}>
                        <Typography sx={{ fontWeight:600,mt: 4, mb: 2, }} variant="h6" component="div">
                        Abu Dhabi
                    </Typography>
                    
                         <Box>

                             <Typography sx={{fontSize:13,mb:1}}>Oxeler Bin Square
                                Seleya Street, Silicon Tower
                                Abu Dhabi, UAE
                                Los Angeles, USA</Typography>
                                <Typography sx={{fontSize:12,mb:1}}>01254 658 987, 02365 987 456</Typography>
                                <Typography sx={{fontSize:12,mb:1}}>info@example.com
                                www.example.com</Typography>
                         </Box>
                        
            
          
                 </Grid>
                    <Grid item xs={12}  sm={12} md={3} sx={{textAlign:'left'}}>
                        <Typography sx={{ fontWeight:600,mt: 4, mb: 2, }} variant="h6" component="div">
                        Newsletter
                    </Typography>
                    
                         <Box sx={{color:"#fff"}}>

                         <TextField 
                         id="standard-basic" 
                         label="Enter your Email"
                          variant="standard" /> <br />
                        <Link style={{color:'#fff'}}>Subscribe</Link>
                               
                         </Box>
                        
            
          
                 </Grid>
           </Grid>
           </Container>
          <Divider/>
          <Typography sx={{py:2}}>All CopyRight © Reserved By GlassStore 2021. Made with  by MERN</Typography>
        </div>
    );
};

export default Footer;