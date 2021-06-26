import React, { useEffect, useState } from 'react';
import './Blog.css';
import SingleBlog from '../SingleBlog/SingleBlog';
import fakeData from '../../../fakedata';

const Blog = () => {
    const [blog,setBlog]=useState([]);
    useEffect(()=>{
        fetch('https://morning-depths-96771.herokuapp.com/blog')
        .then(res=>res.json())
        .then(data=>setBlog(data))
    },[])
    
    return (
        <section className='blog py-5'>
            <h1>Our Blog</h1>

            <div className='container'>
                <div className='row '>
                {
                    blog.map(blog=><SingleBlog key={blog._id} blog={blog}></SingleBlog>)
                }
                </div>
            </div>
           
           
        </section>
    );
};

export default Blog;