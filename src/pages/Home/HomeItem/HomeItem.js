import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeItem.css';

const HomeItem = ({ item }) => {
    const { _id, name, img, description, price, quantity, supplier } = item;
    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/item/${id}`)
    }
    return (
        <div>

            <div className="a-box">
                <div className="img-container">
                    <div className="img-inner">
                        <div className="inner-skew">
                            <img src={img} alt='item-card' />
                        </div>
                    </div>
                </div>
                <div className="text-container">
                    <h3>{name}</h3>
                    <div>
                        <p><small>{description}</small></p>
                        <p><strong>Supplier Name:{supplier}</strong></p>
                        <h3>Price {price} BDT</h3>
                        <h5>Qunatity: {quantity}</h5>
                        <div className="sub-main">
                            <button onClick={() => navigateToItemDetail(_id)} className="button-two"><span>Manage</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeItem;