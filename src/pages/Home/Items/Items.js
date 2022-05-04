// import React, { useEffect, useState } from 'react';
import useItems from '../../../hooks/useItems/useItems';
import Item from '../Item/Item';
import './Items.css';

const Items = () => {

    const [items, setItems] = useItems();

    // useEffect(() => {
    //     fetch('http://localhost:5000/item')
    //         .then(res => res.json())
    //         .then(data => setItems(data))
    // }, [])

    return (
        <div id="services" className='container'>
            <div className='row'>
                <h1 className='services-title mt-3 text-secondary'>Warehouse Fruits Items</h1>
                <div className='services-container'>
                    {
                        items.map(item => <Item
                            key={item._id}
                            item={item}
                        ></Item>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Items;