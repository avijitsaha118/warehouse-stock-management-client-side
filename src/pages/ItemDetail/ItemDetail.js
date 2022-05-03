import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useItemDetail from '../../hooks/useItemDetail/useItemDetail';
import Delivered from '../Home/Delivered/Delivered';
import UpdateStock from '../UpdateStock/UpdateStock';

const ItemDetail = () => {
    const { itemId } = useParams();
    const [item] = useItemDetail(itemId);


    const navigate = useNavigate();

    // if (user) {
    //     navigate('/item');
    // }
    const navigateManage = event => {
        navigate('/manage');
        // navigate('/items');
    }

    return (
        <div>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title>Item Title: {item.name}</Card.Title>
                    <Card.Text>
                        {item.description}
                        <p>Qunatity: {item.quantity}</p>
                        <h4>Supplier: {item.supplier}</h4>
                    </Card.Text>

                    <Delivered></Delivered>

                    {/* <Button variant="secondary">Delivered</Button> */}
                </Card.Body>
            </Card>

            <h2>Update Stock</h2>
            <UpdateStock></UpdateStock>


            <div className='text-center'>
                <Link to={`/item/myitem`}>
                    <button className='btn btn-secondary'>
                        Add New Item
                    </button>
                </Link>
                <p className='text-center fs-2 text-secondary'> <Link to='/manage' className='text-secondary fs-4 pe-auto' onClick={navigateManage}>Manage Inventory</Link></p>

            </div>
        </div>
    );
};

export default ItemDetail;