import React, { useEffect, useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import axios from 'axios';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Footer/Footer/Footer';
import './AddBlog.css';
const AddBlog = () => {
    const [Url, setUrl] = useState({});
    const [formData, setFormData] = useState({});
    const { title, blogContent ,sortDescription, } = formData;
    const [enableButton, setEnableButton] = useState(true);

    useEffect(() => {
        if (Url.length > 0) {
            setEnableButton(false)
        }
    }, [Url])

    const NewBlog = {
        img: Url,
        title,
        blogContent,
        sortDescription
    }
    const HandleSubmitButton = (e) => {
        fetch('https://morning-depths-96771.herokuapp.com/addblog', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(NewBlog)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('New Blog Successfully Add')
                }
            })
        e.preventDefault();
    }


    const HandleInput = (e) => {
        if (e.target.name === 'ServiceName') {
            const title = e.target.value;
            const NewData = { ...formData }
            NewData.title = title
            setFormData(NewData)
        }
        else if (e.target.name === 'price') {
            const price = e.target.value
            const NewData = { ...formData }
            NewData.price = price
            setFormData(NewData)
        }
        else if (e.target.name === 'sortDescription') {
            const sortDescription = e.target.value
            const NewData = { ...formData }
            NewData.sortDescription = sortDescription
            setFormData(NewData)
        }
        else if (e.target.name === 'blogContent') {
            const blogContent = e.target.value
            const NewData = { ...formData }
            NewData.blogContent = blogContent
            setFormData(NewData)
        }
        

    }

    const HandleImageUpload = (event) => {
        const form = new FormData();
        form.set('key', '20eb4f4a88d3505364e15416b41a0df2');
        form.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload',
            form)
            .then(data => {
                setUrl(data.data.data.display_url)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='row'>
                <div className='col-md-3 col-2 col-sm-3'>
                    <Sidebar></Sidebar>
                </div>
                <div className='col-md-9 col-10 col-sm-8'>
                    <h2 className='text-center py-3'>Add New Blog</h2>
                    <div className='addblog'>
                        <div className='form' >
                            <form onSubmit={HandleSubmitButton}>
                                <div className="form-group">
                                    <input type="text" onBlur={HandleInput} className="form-control" required name="ServiceName" aria-describedby="ServiceName" placeholder="Enter Blog Title" />
                                </div>
                                
                                <div className="form-group description">
                                    <input type="text" onBlur={HandleInput} className="form-control " required name="blogContent" placeholder="Enter the Blog Content" />
                                </div>
                                
                                <div className="form-group description">
                                    <input type="text" onBlur={HandleInput} className="form-control " required name="sortDescription" placeholder="Enter the Sort Description" />
                                </div>
                                <div className="form-group">
                                    <input type="file" onChange={HandleImageUpload} className="form-control" placeholder="Image Upload" />
                                </div>
                                <button disabled={enableButton} className='btn btn-info'>Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddBlog;