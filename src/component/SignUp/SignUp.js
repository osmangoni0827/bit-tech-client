import React from 'react';
import { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { Link } from 'react-router-dom';
import './SignUp.css';
import firebaseConfig from '../../firebase.config';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
else {
    firebase.app();
}
const SignUp = () => {
    const [user, setuser] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
        IsSignUp: false,
        error: '',
        success: false
    })


    const HandleInputValue = (e) => {
        const NewUser = { ...user };
        if (e.target.name === 'name') {
            NewUser.name = e.target.value
        }
        else if (e.target.name === 'email') {
            const IsvlidEmail = /\S+@\S+\.\S+/.test(e.target.value);
            IsvlidEmail && (NewUser.email = e.target.value);
        }
        else if (e.target.name === 'password') {
            const IsvalidPass = /(?=.*[0-9])/.test(e.target.value);
            IsvalidPass && (NewUser.password = e.target.value);
        }
        else if (e.target.name === 'confirm-password') {
            const IsvalidPass = /(?=.*[0-9])/.test(e.target.value);
            IsvalidPass && (NewUser.confirmpassword = e.target.value);
        }
        setuser(NewUser)
    }

    const HandleSubmit = (e) => {
        if (user.email && user.password === user.confirmpassword) {
            CreateUser(user.name, user.email, user.password)
        }
        else {
            const Newuser = { ...user };
            Newuser.error = 'Confirm Password are not match';
            Newuser.success = false;
            setuser(Newuser);
        }

        e.preventDefault();
    }

    const CreateUser = (name, email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                const Newuser = { ...user }
                Newuser.error = '';
                Newuser.success = true;
                setuser(Newuser);

                //user update
                UserUpdate(name);
            })
            .catch((error) => {
                //Error Massage
                var errorMessage = error.message;
                const Newuser = { ...user }
                Newuser.error = errorMessage;
                Newuser.success = false;
                setuser(Newuser);
            });
    }

    const UserUpdate = (name) => {
        const Newuser = firebase.auth().currentUser;

        Newuser.updateProfile({
            displayName: name,
        }).then(function () {
            // Update successful.
        }).catch(function (error) {
            // An error happened.
        });
    }

    return (

        <main className='container'>
            <div className=' d-flex justify-content-center align-items-center'>
                <div className='signupStyle shadow text-center'>
                    <div className='signupImage'>
                        <img src='https://i.ibb.co/0mP8GZv/1j-oj-FVDOMk-X9-Wytexe43-D6khv-WAq-RFNk-B3-Iw-Xs1-M3-EMo-AJtli-Ipgv-Bq9-U.png' alt=''></img>
                    </div>
                    <form className='mt-1 mb-2' onSubmit={HandleSubmit}>

                        <input className='form-control p-2' type='name' name='name' placeholder='Enter Your Name' required onBlur={HandleInputValue} />

                        <input className='form-control p-2' type='email' name='email' placeholder='Enter Your Email' required onBlur={HandleInputValue} />

                        <input className='form-control p-2' type='password' name='password' placeholder='New Password' required onBlur={HandleInputValue} />

                        <input className='form-control p-2' type='password' name='confirm-password' placeholder='New Password' required onBlur={HandleInputValue} />

                        <button type='submit' className='mt-4 btn btn-primary'>Submit</button>

                    </form>

                    <p>Are You Already Sign Up?  Please
                        <Link to='/login'> Login</Link>
                    </p>

                    {
                        user.success ? <p style={{ color: 'green' }}>Your Sign in is Successfully</p> : <p className='text-warning'>{user.error}</p>
                    }
                </div>
            </div>
        </main>
    );
};

export default SignUp;