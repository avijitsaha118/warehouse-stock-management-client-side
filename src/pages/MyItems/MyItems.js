import React from 'react';
import useItems from '../../hooks/useItems/useItems';

const MyItems = ({item}) => {
    const {_id, name, img, description, price, quantity, supplier } = item;

    const [items, setItems] = useItems();
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
        <div>
            <p>{name}
            <button onClick={() => handleDelete(item._id)}>Delete</button>
            </p>
        </div>
    );
};

export default MyItems;