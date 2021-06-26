import React, { useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import './AddAdmin.css';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Footer/Footer/Footer';
const AddAdmin = () => {
    const [formData, setFormData] = useState({});
    const { password, name, email } = formData;
    const NewAdmin = {
        email,
        name,
        password
    }

    const HandleAddButton = (e) => {
        fetch('https://morning-depths-96771.herokuapp.com/addAdmin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(NewAdmin)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Your Admin Successfully Done')
                }
            })
        e.preventDefault();
    }


    const HandleInput = (e) => {

        if (e.target.name === 'email') {
            const email = e.target.value
            const NewData = { ...formData }
            NewData.email = email
            setFormData(NewData)
        }
        else if (e.target.name === 'YourName') {
            const name = e.target.value
            const NewData = { ...formData }
            NewData.name = name
            setFormData(NewData)
        }
        else if (e.target.name === 'Password') {
            const password = e.target.value
            const NewData = { ...formData }
            NewData.password = password
            setFormData(NewData)
        }
    }



    return (
        <div>
            <Navbar></Navbar>
            <div className='row'>
                <div className='col-md-3 col-2 col-sm-3'>
                    <Sidebar></Sidebar>
                </div>
                <div className='col-md-9 col-10 col-sm-8'>
                    <h2 className='text-center py-3'>Add Admin</h2>
                    <div className='admin'>
                        <div className='form' >
                            <form onSubmit={HandleAddButton}>
                                <div className="form-group">
                                    <input type="text" onBlur={HandleInput} className="form-control" required name="YourName" aria-describedby="name" placeholder="Enter Your Name" />
                                </div>
                                
                                <div className="form-group">
                                    <input type="email" onChange={HandleInput} className="form-control" required name="email" aria-describedby="email" placeholder="Enter Your Email" />
                                </div>
                                <div className="form-group">
                                    <input type="password" onChange={HandleInput} className="form-control" required name="Password" aria-describedby="password" placeholder="Enter Your New Password" />
                                </div>
                                <button className='btn btn-info'>Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddAdmin;