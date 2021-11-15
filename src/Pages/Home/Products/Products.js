import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import AOS from 'aos';
const Products = () => {
        const [products,setProducts]=useState([])
        const [isLoading,setLoading]=useState(true)
        useEffect(()=>{
            setLoading(true)
            fetch('https://whispering-plains-47367.herokuapp.com/products')
            .then(res=>res.json())
            .then(data=>{
                setLoading(false)
                setProducts(data);
            })
        },[])
        AOS.init();  
    return (

       <Box >

          {
              isLoading &&   <CircularProgress color="success" />
          }
           <Typography data-aos="flip-left" variant="h4" sx={{fontWeight:'600',mt:5}}>
           LATEST EYE GLASSES
           </Typography>
           <Typography sx={{mb:5}}>
           Eye chasmish are very important for thos whos have some difficult <br /> in their eye to see every hing clearly and perfectly
           </Typography>
           <Container>
           <Grid container spacing={2} sx={{ boxShadow: 3 }}>
                {
                    products.slice(0,6).map(product=> <Product
                        key={product._id}
                        product={product}
                    >

                    </Product> )
                }
           </Grid>
           </Container>
       </Box>
    );
};

export default Products;