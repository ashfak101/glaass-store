import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {name,img,description,price,_id}=props.product
    return (
       <Grid  item xs={12} sm={12} md={4} lg={4} sx={{ boxShadow: 3 }}>
           <img src={img} alt="" />
            <Typography>
                {name}
            </Typography>
            <Typography>
                {description.slice(0,70)}
            </Typography>
            <Box sx={{display: 'flex', justifyContent: 'space-evenly', my:4}}>
                <Typography variant="h5" sx={{color:'#12A2C1'}}>{price}$</Typography>
                <Link style={{textDecoration:'none'}} to={`/products/${_id}`}><Button  variant="contained">Buy Now</Button></Link>
            </Box>
       </Grid>
    );
};

export default Product;