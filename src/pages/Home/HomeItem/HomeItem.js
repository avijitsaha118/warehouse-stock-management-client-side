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
        <div className='service'>

            <div className="height d-flex justify-content-center align-items-center">

                <div className="card p-3">

                    <div className="d-flex justify-content-between align-items-center ">
                        <div className="mt-2">
                            <h4 className="text-uppercase">{name}</h4>
                            <div className="mt-5">
                                <h1 style={{fontSize:"25px"}} className="main-heading mt-0">Price: {price}</h1>
                                <br/>
                                <h1 style={{fontSize:"25px"}} className="main-heading mt-0">Qunatity: {quantity}</h1>
                                <p className="mb-0"><strong>Supplier Name:</strong> {supplier}</p>
                            </div>
                        </div>
                        <div className="image">
                            <img src={img} width="200" />
                        </div>
                    </div>


                    <p> Description: {description} </p>

                    {/* <button onClick={() => navigateToItemDetail(_id)} className="btn btn-danger">Manage</button> */}

                    <div className="sub-main">
      <button onClick={() => navigateToItemDetail(_id)} className="button-two"><span>Manage</span></button>
    </div>


                </div>

            </div>

          
            {/* <img className='w-100' src={img} alt='' />
            <h2>
                {name}
            </h2>
            <p><strong>Supplier Name:{supplier}</strong></p>
            <h3>Price {price} BDT</h3>
            <h5>Qunatity: {quantity}</h5>
            <p style={{fontSize:"30px"}}>Price: ${price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToItemDetail(_id)} className='btn btn-success'>Manage</button> */}










           
        </div>
    );
};

export default HomeItem;