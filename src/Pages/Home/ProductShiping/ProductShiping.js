import { Alert, Button,  Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import cart from '../../../Images/shiping/cart.png'

const ProductShiping = () => {
    const {id}=useParams();
    const {user,} =useAuth();
    const [product,setProduct]=useState({})
    const [success,setSuccess]=useState(false)
    const {name,img}=product;
    const initialInfo={UserName:user.displayName,email:user.email,orderId:id};
    const [order,setOrder]=useState(initialInfo)


    useEffect(()=>{
        fetch(`https://whispering-plains-47367.herokuapp.com/products/${id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[id])
   

    const handleonChange=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newOrder={...order}
        newOrder[field]=value;
        setOrder(newOrder)
        console.log(newOrder);
    }
    const handleShipingSubmit =e=>{
        axios.post('https://whispering-plains-47367.herokuapp.com/orders',order)
        .then(res=>{
            if(res.data.insertedId){
                setSuccess(true)
            }
        })
        e.preventDefault()
    }
   
    return (
        <div>
           
            <Container sx={{mt:8}}>
            <Grid container spacing={2}>
                    <Grid container item xs={12} sm={12} md={8}>
                        <img src={img} alt="" />
                        <Box sx={{mx:2 ,my:3}}>
                        <Typography variant="h6" sx={{fontWeight:700,fontSize:20,color: '#454545'}}>Name : {user.displayName}</Typography> 
                        <Typography sx={{fontSize:13}}>Product Name {name}</Typography> 
                        </Box>
                        
                </Grid>
                    
                    
                       
                        
               

            </Grid>

                <Grid container spacing={2}>

                    <Grid item xs={12} sm={12} md={6}>
                        <img style={{width:'100%'}} src={cart} alt="" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <h3>Fill This Form To Place Order</h3>
                    <form onSubmit={handleShipingSubmit}>
                            <TextField
                             label="Give Us 4 Digit Number"
                             sx={{width: '90%', m:1}}
                             id="outlined-size-small"
                             name="key"
                             onChange={handleonChange}
                             
                             size="small"
                               
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
                                disabled
                                sx={{width: '90%', m:1}}
                                id="outlined-size-small"
                                name="email"
                                label="email"
                                
                                defaultValue={user.email}
                                size="small"
                            />
                            <TextField
                                 label="Phone Number"
                                sx={{width: '90%', m:1}}
                                id="outlined-size-small"
                                name="phone"
                                onChange={handleonChange}
                                
                                size="small"
                            />
                            <TextField
                                 name="address"
                                 label="Address"
                                sx={{width: '90%', m:1}}
                                id="outlined-size-small"
                                onChange={handleonChange}
                                size="small"
                            />
                            <Button type="submit" variant="contained">Place Order</Button>
                  </form>
                  
                            {
                            success &&   <Alert severity="success" sx={{mb:3}}>Your Data Added Successfully</Alert>
                            }

                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default ProductShiping;