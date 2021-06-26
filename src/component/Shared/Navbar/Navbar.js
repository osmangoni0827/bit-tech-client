import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import firebase from "firebase/app";
import { loggedInContext } from '../../../App';
const Navbar = () => {
    const isLogin=sessionStorage.getItem('token');
    console.log(isLogin)
    const[loggedInUser,setLoggedInUser]=useContext(loggedInContext);
    const HandleSignOut=()=>{

        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            sessionStorage.removeItem('email');
            sessionStorage.removeItem('password');
            sessionStorage.removeItem('token');
            setLoggedInUser({});
          }).catch((error) => {
            // An error happened.
          });

        // firebase.auth().signOut().then(() => {
        //     setLoggedInUser({})
        //     sessionStorage.removeItem('token')
        //     sessionStorage.removeItem('email')
        //     sessionStorage.removeItem('password')
        //     // Sign-out successful.
        //   }).catch((error) => {
        //     // An error happened.
        //   });
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark NavStyle">
            <div className="container-fluid ">
                <img src='https://i.ibb.co/0mP8GZv/1j-oj-FVDOMk-X9-Wytexe43-D6khv-WAq-RFNk-B3-Iw-Xs1-M3-EMo-AJtli-Ipgv-Bq9-U.png' alt=''></img>
                <a className="navbar-brand text-white" href="/"><h1>Bit Tech</h1></a>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item ">
                            <Link to='/home' className="nav-link active text-white" aria-current="page" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-link active text-white" aria-current="page" >Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/dashboard' className="nav-link active text-white" aria-current="page" >Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-link active text-white" aria-current="page" >Contact Us</Link>
                        </li>
                        <li>
                    {
                        !isLogin?<Link to='/login'><button className="btn btn-primary mt-1">Sign In</button></Link>:<button onClick={HandleSignOut} className="btn btn-primary mt-1">Sign Out</button>
                    }
                    
                </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;