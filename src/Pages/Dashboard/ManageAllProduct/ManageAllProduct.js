import { Button, CircularProgress, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';

const ManageAllProduct = () => {
  


      const [isLoading,setLoading]=useState(true)
      const [products,setProducts]=useState([])
      useEffect(()=>{
          setLoading(true)
          fetch('https://whispering-plains-47367.herokuapp.com/products')
          .then(res=>res.json())
          .then(data=>{
              setLoading(false)
              setProducts(data);
          })
      },[])
      const handleCancel=id=>{
        const proceed= window.confirm('Are you Sure,you want delete?')
            if(proceed){
                const url=`https://whispering-plains-47367.herokuapp.com/products/${id}`;
                fetch(url,{
                    method:'DELETE',
                
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount>0){
                        alert('deleted Successfully')
                        const existing =products.filter(productss=>products._id!==id)
                        setProducts(existing)
        }
    })
   }
    }
      

    return (
       <Grid xs={12}>
             {
              isLoading &&   <CircularProgress color="success" />
          }
            <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Action</TableCell>
              
             
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                <img src={row.img} alt="" />
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">  <Button onClick={()=>handleCancel(row._id)} sx={{color:'red'}}>Delete</Button></TableCell>
               
              
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
       </Grid>
    );
};

export default ManageAllProduct;