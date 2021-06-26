import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Blog from '../../Blog/Blog/Blog';
import Footer from '../../Footer/Footer/Footer';
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;