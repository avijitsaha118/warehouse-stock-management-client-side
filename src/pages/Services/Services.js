import { faPeopleCarryBox, faStore, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className="service-box">
            <section className="section-box">
                <div className="row-item mb-3">
                    <h4 className='text-center text-title'>Our Services</h4>
                    {/* <h2 className="section-title">Our Services</h2> */}
                </div>
                <div className="row-item mb-5">
                    <div className="column-item">
                        <div className="card-item">
                            <div className="icon-wrapper">
                                <i><FontAwesomeIcon icon={faStore}></FontAwesomeIcon></i>
                            </div>
                            <h3 className="service-heading">Warehouse Rent</h3>
                            <p className="paragraph">
                                We offer our warehouse space for rent to small business owner or local enterpreneur.
                            </p>
                        </div>
                    </div>
                    <div className="column-item">
                        <div className="card-item">
                            <div className="icon-wrapper">
                                <i><FontAwesomeIcon icon={faTruck}></FontAwesomeIcon></i>
                            </div>
                            <h3 className="service-heading">24/7 Pick-Up Facility</h3>
                            <p className="paragraph">
                                From our warehouse you can pick-up your goods at any time and its called express service.
                            </p>
                        </div>
                    </div>
                    <div className="column-item">
                        <div className="card-item">
                            <div className="icon-wrapper">
                                <i><FontAwesomeIcon icon={faPeopleCarryBox}></FontAwesomeIcon></i>
                            </div>
                            <h3 className="service-heading">Delivary Option</h3>
                            <p className="paragraph">
                                Our warehouse to store delivary service is always open and faster than others.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;