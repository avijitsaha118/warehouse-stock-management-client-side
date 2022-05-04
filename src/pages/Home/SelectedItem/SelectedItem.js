import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useItems from '../../../hooks/useItems/useItems';
import HomeItem from '../HomeItem/HomeItem';
import './SelectedItem.css';

const SelectedItem = () => {
    const [items] = useItems();
    const navigate = useNavigate();

    // if (user) {
    //     navigate('/item');
    // }
    const navigateManage = event => {
        navigate('/manage');
        // navigate('/items');
    }
    return (
        <>
           <h4 className='text-center mt-3 text-title'>Inventory Items</h4> 
            <div className='item-container item-card-container'>
                {
                    items.slice(0, 6).map(item => <HomeItem
                        key={item._id}
                        item={item}
                    ></HomeItem>)
                }
            </div>
            <p className='text-center fs-2 text-secondary'> <Link to='/manage' className='text-title fs-4 pe-auto' onClick={navigateManage}>Manage Inventory</Link></p>
            {/* <p> Manage inventories? <Link to='/items' className='text-success pe-auto text-decoration-none' onClick={navigateRegister}>All Inventory</Link></p> */}
        </>

    );
};

export default SelectedItem;