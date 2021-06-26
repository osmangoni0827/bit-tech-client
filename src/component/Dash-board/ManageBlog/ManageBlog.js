import React, { useEffect, useState } from 'react';
import BlogListTable from '../BlogListTable/BlogListTable';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Footer/Footer/Footer';
const ManageBlog = () => {
    const [blog, setblog] = useState([]);

    useEffect(() => {
        fetch('https://morning-depths-96771.herokuapp.com/blog')
            .then(res => res.json())
            .then(data => setblog(data))
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <div className="row" >
                <div className='col-md-3 col-2 col-sm-3'>
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 col-10 col-sm-9 p-4 pr-5" style={{ position: "absolute", right: 0, }}>
                    <h5 className="text-center">All Blog List</h5>
                    <BlogListTable blog={blog} />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ManageBlog;