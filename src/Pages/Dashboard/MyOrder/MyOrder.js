import { Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrder = () => {
        const {user}=useAuth();
        const [myorder,setMyorder]=useState([]);

        useEffect(()=>{
            const url=`https://whispering-plains-47367.herokuapp.com/orders/${user?.email}`
            fetch(url)
            .then(res=>res.json())
            .then(data=>setMyorder(data))
        },[user?.email])
        const handleCancel=id=>{
            const proceed= window.confirm('Are you Sure,you want delete?')
                if(proceed){
                    const url=`https://whispering-plains-47367.herokuapp.com/orders/${id}`;
                    fetch(url,{
                        method:'DELETE',
                    
                    })
                    .then(res=>res.json())
                    .then(data=>{
                        if(data.deletedCount>0){
                            alert('deleted Successfully')
                            const existing =myorder.filter(booked=>booked._id!==id)
                            setMyorder(existing)
            }
        })
       }
        }

    return (
        <div>
            <h1>My Order</h1>
            <Grid container spacing={2}>
                {
                    myorder.map(order=>
                    <Grid  item xs={12} sm={12} md={6} key={order._id} sx={{ boxShadow: 1,mt:2,p:2 }} >
                            <Typography>Your Order ID: {order._id}</Typography>
                            <Typography>OrderBy : {order.UserName}  </Typography>
                            
                                <Button variant="contained">{order.status}</Button>
                                <Button onClick={()=>handleCancel(order._id)} variant="contained" sx={{m:1}}>Cancel</Button>
                                
                           
                           
                    </Grid>)
                }
           </Grid>
        </div>
    );
};

export default MyOrder;