import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import icon from '../../../Images/icons/ship_icon_1.png'
import icon2 from '../../../Images/icons/ship_icon_2.png'
import icon3 from '../../../Images/icons/ship_icon_3.png'
import icon4 from '../../../Images/icons/ship_icon_4.png'
const Delivery = () => {
    return (
        <div style={{backgroundColor:'#E7E9EA',marginTop:'25px'}}>
            
            <Grid container spacing={1} sx={{py:10,px:2}}>
                <Grid container item xs={12} sm={12} md={3}>
                        <img src={icon} alt="" />
                        <Box sx={{mx:2}}>
                        <Typography variant="h6" sx={{fontWeight:700,fontSize:20,color: '#454545'}}>Free home delivery</Typography> 
                        <Typography sx={{fontSize:13}}>Eye chasmish are very important for thos <br /> whos have some difficult</Typography> 
                        </Box>
                </Grid>
                <Grid container item xs={12} sm={12} md={3}>
                     <img src={icon2} alt="" />
                     <Box sx={{mx:2}}>
                            <Typography variant="h6"  sx={{fontWeight:700,fontSize:20,color: '#454545'}}>Quality Products</Typography>  
                            <Typography sx={{fontSize:13}}>Eye chasmish are very important for thos <br /> whos have some difficult</Typography>
                        </Box>
                </Grid>
                <Grid container item xs={12} sm={12} md={3}>
                     <img src={icon3} alt="" />
                     <Box sx={{mx:2}}>
                            <Typography variant="h6"  sx={{fontWeight:700,fontSize:20,color: '#454545'}}>Gift Voucher</Typography>  
                            <Typography sx={{fontSize:13}}>Eye chasmish are very important for thos <br /> whos have some difficult</Typography>
                        </Box>
                </Grid>
                <Grid container item xs={12} sm={12} md={3}>
                    <img src={icon4} alt="" />
                    <Box sx={{mx:2}}>
                        <Typography variant="h6"  sx={{fontWeight:700,fontSize:20,color: '#454545'}}>3 Days easy return</Typography> 
                        <Typography sx={{fontSize:13}}>Eye chasmish are very important for thos <br /> whos have some difficult</Typography>
                         
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default Delivery;