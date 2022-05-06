import React from 'react';
import './Footer.css';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-dark mt-3">
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-3 item">
                                <h3>Items</h3>
                                <ul>
                                    <li><a href="#">Apple</a></li>
                                    <li><a href="#">Orange</a></li>
                                    <li><a href="#">Coconut</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 item">
                                <h3>About Us</h3>
                                <ul>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Address</a></li>
                                    <li><a href="#">Others</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 item text">
                                <h3>Country Cool Fruits Warehouse</h3>
                                <p> Contact: +8801777000222</p>
                                <p>Email: coolwarehouse@country.com</p>
                            </div>
                        </div>


                    </div>
                    <div>
                        <ul className="socials">
                            <li><a href="#"><i><FontAwesomeIcon icon={faFacebook} /></i></a></li>
                            <li><a href="#"><i><FontAwesomeIcon icon={faTwitter} /></i></a></li>
                            <li><a href="#"><i><FontAwesomeIcon icon={faYoutube} /></i></a></li>
                            <li><a href="#"><i><FontAwesomeIcon icon={faWhatsapp} /></i></a></li>
                        </ul>
                        <p className="copyright">Country Cool Fruits Warehouse © 2022</p>
                    </div>

                </footer>
            </div>
        </div>
    );
};

export default Footer;