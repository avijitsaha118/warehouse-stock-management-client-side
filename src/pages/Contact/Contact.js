import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div className='contact-content'>
            <div className="contact-container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mr-auto">
                        <div className="mb-5">
                            <h3 className="text-secondary mb-4 text-center">Contact Info</h3>
                            <p className="text-white text-center">You can contact us anytime and visit our online warehouse inventories website also. Just login and manage your item easily from here.</p>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="text-white h5 mb-3">Dhaka</h3>
                                <ul className="list-unstyled mb-5">
                                    <li className="d-flex text-white mb-2">
                                        <span className="mr-3">8/C, Subranagram</span>
                                    </li>
                                    <li className="d-flex text-white mb-2"><span className="mr-3"><span className="icon-phone"></span></span> +8801777000222</li>
                                    <li className="d-flex text-white"><span className="mr-3"><span className="icon-envelope-o"></span></span>coolwarehouse@country.com</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <h3 className="text-white h5 mb-3">Cox's Bazar</h3>
                                <ul className="list-unstyled mb-5">
                                    <li className="d-flex text-white mb-2">
                                        <span className="mr-3">54, Raipur, Near Hill</span>
                                    </li>
                                    <li className="d-flex text-white mb-2"><span className="mr-3"><span className="icon-phone"></span></span> +8801770001111</li>
                                    <li className="d-flex text-white"><span className="mr-3"><span className="icon-envelope-o"></span></span> coldwarehousecz@country.com </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="box">
                            <h4 style={{fontSize: '15px'}} className="text-secondary mb-4 text-center ">Send us a Message</h4>
                            <form className="mb-5" method="post" id="contactForm" name="contactForm">
                                <div className="row">

                                    <div className="col-md-12 form-group">
                                        <label for="name" className="col-form-label">Name</label>
                                        <input type="text" className="form-control" name="name" id="name" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <label for="email" className="col-form-label">Email</label>
                                        <input type="text" className="form-control" name="email" id="email" />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-12 form-group">
                                        <label for="message" className="col-form-label">Message</label>
                                        <textarea className="form-control" name="message" id="message" cols="30" rows="7"></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="submit" value="Send Message" className="btn btn-block btn-primary rounded-0 py-2 px-4" />
                                        <span className="submitting"></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;