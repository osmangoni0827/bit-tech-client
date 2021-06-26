import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { faBorderNone,faTasks,faUsersCog,faPlusCircle, faHome} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sidebar.css'; 
import { loggedInContext } from '../../../App';
const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(loggedInContext);
    const [isAdmin,setAdmin]=useState(false);
    const email=loggedInUser.email||sessionStorage.getItem('email');
    const password=loggedInContext.password||sessionStorage.getItem('password');
    const history=useHistory();
    console.log(password)
    useEffect(() => {
        fetch('https://morning-depths-96771.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email:email,password:password })
        })
            .then(res => res.json())
            .then(data => {
                if (!data) {
                console.log(data)
                alert("You Are Not Admin. Your Permission Not Alow");
                history.push('/home');
                }else{
                    setAdmin(true)
                }
            })
    }, [loggedInUser.email])
   
    return (
    <div className="sidebar sticky-top">
            <div className="d-flex justify-content-center">
            <img src="https://i.ibb.co/0mP8GZv/1j-oj-FVDOMk-X9-Wytexe43-D6khv-WAq-RFNk-B3-Iw-Xs1-M3-EMo-AJtli-Ipgv-Bq9-U.png" alt=""></img>
            </div>
            <Link to="/dashboard">
            <div className='d-flex align-items-center dashboard'>
            <FontAwesomeIcon className='icon' icon={faBorderNone} size='2x' color="#00000" />
            <h3>Dashboard</h3>
            </div>
            </Link>
            <ul className="navbar-nav ">
                {
                    isAdmin?<div>
                        <li className="nav-item menu d-flex  align-items-center  p-2">
                        <FontAwesomeIcon className='icon' icon={faTasks} size='2x' color="#FFFFFF" />
                            <NavLink activeClassName="active" className="nav-link " to='/manageblog'>Manage Blog</NavLink>
                        </li>
                        <li className="nav-item menu d-flex  align-items-center p-2 ">
                        <FontAwesomeIcon className='icon' icon={faPlusCircle} size='2x' color="#FFFFFF" />
        
                            <NavLink activeClassName="active" className="nav-link " to='/addNewBlog'>Add Blog</NavLink>
                        </li>
        
                       
                        <li className="nav-item menu d-flex  align-items-center  p-2">
                        <FontAwesomeIcon className='icon' icon={faUsersCog} size='2x' color="#FFFFFF" />
                            <NavLink activeClassName="active" className="nav-link " to='/makeAdmin'>Create New Admin</NavLink>
                        </li>
                    </div>:
                    <div className="pt-5 pb-5">
                         <li className="nav-item menu d-flex  align-items-center  p-3">
                        <FontAwesomeIcon className='icon' icon={faHome} size='2x' color="#FFFFFF" />
                            <NavLink activeClassName="active" className="nav-link " to='/makeAdmin'>Home</NavLink>
                        </li>
                    </div>
                }
               
            </ul>
        </div>
    );
};

export default Sidebar;