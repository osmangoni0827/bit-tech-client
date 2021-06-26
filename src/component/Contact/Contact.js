import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import Navbar from '../Shared/Navbar/Navbar';
import {faEnvelope,faPhone, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faTwitter, faLinkedinIn, faYoutube} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../Footer/Footer/Footer';
const Contact = () => {
    const emailSend = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_csd5vqk', 'template_bcco4fk', e.target, 'user_hBPzm8aK7wRUkSbU50AAW')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }
    return (
       <div>
           <Navbar></Navbar>
           <div className='d-flex justify-content-center container'>
            
            <div className='contact-Page'>
            <h2>Contact Us</h2>
            <div className="row contact-cards">
                <div className="col-md-5 col-lg-5 col-sm-12 col-12 p-0">
                    <div className="contact-Information ">
                           <h3>Contact Information</h3> 
                           <p>Fill up the form and send massage. Out Team will back your within 24 hours</p>
                        <ul>
                            <li className="d-flex align-items-center">
                                <div>
                                <FontAwesomeIcon className='icon' icon={faEnvelope} size='1x' color="#FFFFFF"/>

                                </div>
                            <p>osmangoni0827@gmail.com</p>
                            </li>
                            <li className="d-flex align-items-center">
                            <div>
                            <FontAwesomeIcon className='icon' icon={faPhone} size='1x' color="#FFFFFF"/>

                            </div>
                            <p>+8801878403884</p>
                            </li>
                            <li className="d-flex align-items-center ">
                            <div>
                            <FontAwesomeIcon className='icon' icon={faMapMarkerAlt} size='1x' color="#FFFFFF"/>
                            </div>
                            <p>3DCE-ChockBazar, Dhaka-Bangladesh</p>
                            </li>
                        </ul>

                        <div className="mt-5 d-flex align-items-center justify-content-center">
                            <div className="Link-icon">
                            <a target ='_blank' href='#'>
            <FontAwesomeIcon  icon={faFacebook} size='2x' color="#FFFFFF"/>
            </a>
            <a target ='_blank' href='#'>
            <FontAwesomeIcon  icon={faLinkedinIn} size='2x'  color="#FFFFFF"/>
            </a>
            <a target ='_blank' href='#'>
            <FontAwesomeIcon  icon={faTwitter} size='2x'  color="#FFFFFF"/>
            </a>
            <a target ='_blank' href='#'>
            <FontAwesomeIcon  icon={faYoutube} size='2x'  color="#FFFFFF"/>
            </a>
                            </div>
            </div>
                    </div>
                </div>
                <div className='col-md-7 col-lg-7 col-sm-12 col-12 p-0'>
        <div className='contact-form'>
            
            <form className='formclass' onSubmit={emailSend}>
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" name='email' class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" name='name' class="form-control" id="name" placeholder="Name" />
                </div>
                <div class="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" class="form-control" name='Subject' id="subject" placeholder="Subject" />
                </div>
                <div class="form-group massage" >
                    <label for="massage">Massage</label>
                    <input type="text" name='massage' class="form-control " id="massage" placeholder="Massage" />
                </div>
                <button type="submit" class="btn btn-primary">Send Massage</button>
            </form>
        </div>
                </div>
            </div>
            </div>
        </div>
        <Footer></Footer>
       </div>
    );
};

export default Contact;