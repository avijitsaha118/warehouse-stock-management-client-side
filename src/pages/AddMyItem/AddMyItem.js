import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useItemDetail } from '../../hooks/useItemDetail/useItemDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddMyItem = () => {

    const { itemId } = useParams();
    // const [item] = useItemDetail(itemId);
    const [user] = useAuthState(auth);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const myitem = {
            email: user.email,
            // service: service.name,
            // serviceId: serviceId,
            name: event.target.name.value,
            description: event.target.description.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            supplier: event.target.supplier.value,
            img: event.target.img.value,
        }

        axios.post('http://localhost:5000/myitem', myitem)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('your item is added!');

                    event.target.reset();
                }
            })
    }

    return (
        <div>
            <h2>Add Item </h2>
            <form onSubmit={handlePlaceOrder}>
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled></input>
                <br />
                <input className='w-100 mb-2' type="text" name="name" placeholder='Item Name' autoComplete='off' required></input>
                <br />
                <input className='w-100 mb-2' type="text" name="description" placeholder='Description' required></input>
                <br />
                <input className='w-100 mb-2' type="number" name="price" placeholder='Price' autoComplete='off' required></input>
                <br />
                <input className='w-100 mb-2' type="number" name="quantity" placeholder='Quantity' required></input>
                <br />
                <input className='w-100 mb-2' type="text" name="supplier" placeholder='Supplier Name' autoComplete='off' required></input>
                <br />
                <input className='w-100 mb-2' type="text" name="img" placeholder='Img Url' required></input>
                <br />
                <input className='btn btn-primary' type='submit' value='Add Item'></input>
            </form>
        </div>
    );
};

export default AddMyItem;