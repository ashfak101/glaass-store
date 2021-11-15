import { CircularProgress } from '@mui/material';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import ProductShiping from '../Home/ProductShiping/ProductShiping';
import Navbar from '../Shared/NavBar/Navbar';


const ProductBooked = () => {
    const{loading}=useAuth()
    if(loading){
        return <CircularProgress color="inherit" />
    }
    return (
        <div>
            <Navbar/>
            <ProductShiping/>
        </div>
    );
};

export default ProductBooked;
