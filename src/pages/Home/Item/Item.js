import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {
    const { _id, name, img, description, price, quantity, supplier } = item;
    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/item/${id}`)
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt='' />
            <h2>
                {name}
            </h2>
            <p><strong>Supplier Name:{supplier}</strong></p>
            <h3>Price {price} BDT</h3>
            <h5>Qunatity: {quantity}</h5>
            {/* <p style={{fontSize:"30px"}}>Price: ${price}</p> */}
            <p><small>{description}</small></p>
            <button onClick={() => navigateToItemDetail(_id)} className='btn btn-success'>Manage</button>
        </div>
    );
};

export default Item;