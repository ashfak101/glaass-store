import { Alert, Button, TextField } from '@mui/material';
import axios from 'axios';

import React, { useState } from 'react';

const AddProducts = () => {
    const [productsData,setProductsData]=useState()
    const [success,setSuccess]=useState(false)
    //
    const   handleOnBlur=e=>{
        const field =e.target.name;
        const value =e.target.value;
        const newData={...productsData};
        newData[field]=value;
        console.log(newData);
        setProductsData(newData)
    }


    // Send Data to Database or server
    const handleProductsSubmit=e=>{

        axios.post('https://whispering-plains-47367.herokuapp.com/products',productsData)
        .then(res=>{
            if(res.data.insertedId){
                setSuccess(true)
            }
        })

        e.preventDefault()
    }
    return (
        <div>
            <h1>Add New  Products</h1>

            {
              success &&   <Alert severity="success" sx={{mb:3}}>Your Data Added Successfully</Alert>
            }
            <form onSubmit={handleProductsSubmit}>
                    <TextField
                        id="outlined-password-input"
                        label="Name"
                        name="name"
                        onBlur={handleOnBlur}
                        sx={{width:'48%',marginRight:'2px',marginBottom:'20px'}}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Description"
                        name="description"
                        onBlur={handleOnBlur}
                        sx={{width:'48%'}}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Image"
                        name="img"
                        onBlur={handleOnBlur}
                        sx={{width:'48%',marginRight:'2px'}}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Price"
                        name="price"
                         type='number'
                         onBlur={handleOnBlur}
                        sx={{width:'48%'}}
                    />
                    <Button type ='submit' variant="outlined" sx={{width:'50%',m:1,borderColor:'#713095'}}>Submit</Button>
            </form>
        </div>
    );
};

export default AddProducts;