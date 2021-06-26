import React from 'react';
import './FooterCol.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const FooterCol = ({info}) => {
    const profs=info;
    console.log(profs)
    return (
        <div className="col-md-3 col-sm-6 col-12 footercol">
            {
                profs.status==='Contact'&&<div>
                    <h4>{profs.status}</h4>
                    <h6>{profs.phone}</h6>
                    <h6>{profs.email}</h6>
                </div>
            }

            {
                profs.status==='Address'&&<div>
                    <h4>{profs.status}</h4>
                    <h6>{profs.address}</h6>
                </div>
            }

            {
                profs.status==='Socials'&&<div>
                   <h4>{profs.status}</h4>
                   <ul className="socialMedia list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon activeIcon" icon={profs.icon1} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={profs.icon2} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={profs.icon3} /></a></li>
                    </ul>
                </div>
            }
        </div>
    );
};

export default FooterCol;