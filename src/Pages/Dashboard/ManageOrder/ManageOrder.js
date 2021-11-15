import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

import React, { useEffect, useState } from 'react';

const ManageOrder = () => {
        const[orders,setOrders]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    const handleOnClick=(id)=>{
        const url=`http://localhost:5000/orders/${id}`
        fetch(url,{
            method: 'PUT',
            // headers:{
                
            //     'content-type':'application/json'
            // },
            // body: JSON.stringify(orders)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                // alert('Approved Successfully')
                window.location.reload();
            }
        })
    }
    return (
        <div>
           <Grid container spacing={2}>
                {
                    orders.map(order=>
                    <Grid  item xs={12} sm={12} md={4} key={order._id} sx={{ boxShadow: 1,mt:2 }} >
                            <Typography>Your Order ID: {order._id}</Typography>
                            <Typography>OrderBy : {order.UserName}  </Typography>
                            <Box>
                                <Button>{order.status}</Button>
                                <Button onClick={()=>handleOnClick(order._id)} sx={{color:'red'}}>Approved</Button>
                            </Box>
                           
                    </Grid>)
                }
           </Grid>
        </div>
    );
};

export default ManageOrder;