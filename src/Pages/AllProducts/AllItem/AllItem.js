
import { Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllItem = () => {
    const [isLoading,setLoading]=useState(true)
    const [products,setProducts]=useState([])
    useEffect(()=>{
        setLoading(true)
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>{
            setLoading(false)
            setProducts(data);
        })
    },[])
    
    return (
        <Container sx={{mt:4}}>
             {
              isLoading &&   <CircularProgress color="success" />
          }
            <Grid container spacing={2}>
                {
                    products.map(product=>
                    
                    <Grid item xs={12} sm={12} md={4} key={product._id}>
                            <Card sx={{ maxWidth: 345, mb:2}}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={product.img}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                   {product.description.slice(0,100)}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                <Button  ><Link to={`/products/${product._id}`}>Buy Now</Link></Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                                </Card>
                    </Grid>)
                }
            </Grid>
        </Container>
    );
};

export default AllItem;