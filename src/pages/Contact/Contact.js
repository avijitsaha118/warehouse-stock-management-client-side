import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div className='contact-content'>
            <div className="contact-container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mr-auto">
                        <div className="mb-5">
                            <h3 className="text-white mb-4">Contact Info</h3>
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus blanditiis, perferendis aliquam.</p>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="text-white h5 mb-3">London</h3>
                                <ul className="list-unstyled mb-5">
                                    <li className="d-flex text-white mb-2">
                                        <span className="mr-3"><span className="icon-map"></span></span> 34 Street Name, City Name Here, United States
                                    </li>
                                    <li className="d-flex text-white mb-2"><span className="mr-3"><span className="icon-phone"></span></span> +1 (222) 345 6789</li>
                                    <li className="d-flex text-white"><span className="mr-3"><span className="icon-envelope-o"></span></span> info@mywebsite.com </li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <h3 className="text-white h5 mb-3">New York</h3>
                                <ul className="list-unstyled mb-5">
                                    <li className="d-flex text-white mb-2">
                                        <span className="mr-3"><span className="icon-map"></span></span> 34 Street Name, City Name Here, United States
                                    </li>
                                    <li className="d-flex text-white mb-2"><span className="mr-3"><span className="icon-phone"></span></span> +1 (222) 345 6789</li>
                                    <li className="d-flex text-white"><span className="mr-3"><span className="icon-envelope-o"></span></span> info@mywebsite.com </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="box">
                            <h3 className="heading">Send us a message</h3>
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