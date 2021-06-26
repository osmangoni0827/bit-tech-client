import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const FooterInfo=[
    {
        status:'Contact',
        phone:'2545874521',
        email:'bitTech@bd.com'
    },
    {
        status:'Address',
        address:'Sidestate NSW 4132 Bangladesh'
    },{
        status:'Socials',
        icon1:faFacebookF,
        icon2:faGooglePlusG,
        icon3:faInstagram
    }
]
const Footer = () => {
    
    return (
        <footer className="footer clear-both">
            <div className="container pt-3">
                <div className="row py-1">
                <div className='col-12 col-md-3 col-sm-6 logopart'>
                    <img src="https://i.ibb.co/0mP8GZv/1j-oj-FVDOMk-X9-Wytexe43-D6khv-WAq-RFNk-B3-Iw-Xs1-M3-EMo-AJtli-Ipgv-Bq9-U.png" alt=''></img>
                    <p>Bit Tech is a Blog Website. We publish technological blog in our website.</p>
                </div>
                    {
                        FooterInfo.map(info=><FooterCol info={info}></FooterCol>)
                    }
                </div>
                <div className="copyRight text-center">
                    <hr></hr>
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;