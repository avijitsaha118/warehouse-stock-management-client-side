import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../../hooks/useItems/useItems';

const ManageItems = () => {
    const [items, setItems] = useItems();

    const navigate = useNavigate();

    // if (user) {
    //     navigate('/item');
    // }
    const navigateAddNew = event => {
        navigate('/item/myitem');
        // navigate('/items');
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2> Manage your Services</h2>
            {
                items.map(item => <div key={item._id}>
                    <h4>{item.name}
                        <button className='btn btn-danger' onClick={() => handleDelete(item._id)}><i><FontAwesomeIcon icon={faTrash} /></i> Delete</button>
                    </h4>
                </div>
                )
            }
           <button className='btn btn-secondary mt-5' onClick={navigateAddNew}>Add New Item</button>

        </div>
    );
};

export default ManageItems;