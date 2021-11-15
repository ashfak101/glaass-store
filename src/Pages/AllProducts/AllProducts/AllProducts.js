import { CircularProgress } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/NavBar/Navbar';
import AllItem from '../AllItem/AllItem';

const AllProducts = () => {
    const {loading}=useAuth();
    if(loading){
        return <CircularProgress color="inherit" />
    }
    return (
        <div>
            <Navbar></Navbar>
            <AllItem></AllItem>
            <Footer></Footer>
        </div>
    );
};

export default AllProducts;