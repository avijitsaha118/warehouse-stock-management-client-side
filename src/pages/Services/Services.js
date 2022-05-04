import { faCake, faPeopleCarryBox, faStore, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className="service-box">
            <section className="section-box">
                <div className="row-item mt-3">
                    <h2 className="section-title">Our Services</h2>
                </div>
                <div className="row-item">
                    <div className="column-item">
                        <div className="card-item">
                            <div className="icon-wrapper">
                                <i><FontAwesomeIcon icon={faStore}></FontAwesomeIcon></i>
                            </div>
                            <h3 className="service-heading">Warehouse Rent</h3>
                            <p className="paragraph">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                                consequatur necessitatibus eaque.
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
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                                consequatur necessitatibus eaque.
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
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                                consequatur necessitatibus eaque.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;