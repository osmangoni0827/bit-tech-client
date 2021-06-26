import React, { useContext, useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import bg from '../../../image/dashboard.png';
import { faBorderNone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Dashboard.css';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Footer/Footer/Footer';
import { loggedInContext } from '../../../App';
const Dashboard = () => {
    const[loogedInUser]=useContext(loggedInContext);
    const [displaySidebar, setdisplaySidebar] = useState(true);
    const HandleDasboardButton = () => {
        const sidebar = document.getElementById("sidebar");
        const dashboardDetails = document.getElementById("dashboard-details");
        if (displaySidebar) {
            sidebar.style.display = `none`;
            dashboardDetails.className = "col-md-12 col-lg-12 col-sm-12 col-12 dashboard-details";
            setdisplaySidebar(!displaySidebar)
        }
        else {
            sidebar.style.display = `block`;
            dashboardDetails.className = "col-md-9 col-lg-9 col-sm-12 col-12 dashboard-details";
            setdisplaySidebar(!displaySidebar)
        }
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='header shadow d-flex justify-content-between align-items-center' >
                <div className="d-flex align-items-center headerButton">
                    <button onClick={HandleDasboardButton} className="btn ">
                        {/* <span className="navbar-toggler-icon"></span> */}
                        <FontAwesomeIcon className='icon' icon={faBorderNone} size='2x' color="#00000" />
                    </button>
                    <h2>Dashboard</h2>
                </div>
                <div className="d-flex align-items-center user">
                    <img src="https://i.ibb.co/sH6xDVr/gentelman1-removebg-preview.png" alt=""></img>
                    <h6>{loogedInUser.name}</h6>
                </div>
            </div>

            <div className="dashboard">
                <div className="row">
                    {/* Dashboard Sidebar */}
                    <div className="col-md-3 col-lg-3 col-sm-12 col-12 dashboard-sidebar" id="sidebar">
                        <Sidebar></Sidebar>
                    </div>
                    {/* Dashboard Home Page */}
                    <div className="col-md-9 col-lg-9 col-sm-12 col-12 dashboard-details" id="dashboard-details">
                        <div className="d-flex justify-content-center pt-5">
                            <img className="img-fluid p-2 mb-4" src={bg} alt=''></img>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Dashboard;