import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import './SingleBlogInfo.css';
import Footer from '../Footer/Footer/Footer';
import { useParams } from 'react-router';
const SingleBlogInfo = () => {
    const { id } = useParams();
    const [singleBlog,setSingleBlog]=useState({});
    const{title,img,blogContent}=singleBlog;
    useEffect(() => {
        fetch(`https://morning-depths-96771.herokuapp.com/OrderById/${id}`)
            .then(res => res.json())
            .then(data => {
                setSingleBlog(data);
                console.log(data)
            })
    }, [id])
    return (
        <div>
            <Navbar></Navbar>
            <div className="bloginfo">
                <img src={img} alt="" />
                <h1>{title}</h1>
                <p>{blogContent}</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SingleBlogInfo;