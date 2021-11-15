import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/NavBar/Navbar';
import Banner from '../Banner/Banner';
import Delivery from '../Delivery/Delivery';
import Products from '../Products/Products';
import UserReview from '../UserReview/UserReview';
import useAuth from '../../../hooks/useAuth';
import { CircularProgress } from '@mui/material';
const Home = () => {
    const {loading}=useAuth();
    if(loading){
        return <CircularProgress color="inherit" />
    }
    return (
        <div>
            <Navbar></Navbar>
            <Banner/>
            <Products/>
            <Delivery/>
            <UserReview></UserReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;