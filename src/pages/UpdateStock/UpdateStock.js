import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateStock = () => {
    const { itemId } = useParams();
    // console.log(itemId);
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `https://arcane-everglades-80652.herokuapp.com/item/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [itemId]);

    const handleUpdateItem = event => {
        event.preventDefault();
       
        const quantity = item.quantity + parseInt(event.target.quantity.value)
        // console.log(quantity);

        const updatedItem = { quantity };

        //send data to the server
       const url= `https://arcane-everglades-80652.herokuapp.com/item/${itemId}`;
       fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('success', data)
                alert('user added successfully!');
                event.target.reset();
            })
    }

    return (
        <div>
            {/* <h2>
                Update Qunatity of {item.name}

            </h2> */}
            <form onSubmit={handleUpdateItem}>
                <input type='number' name='quantity' placeholder='Quantity' required></input>
                <br />
                <input type='submit' value='Update Quantity'></input>
            </form>
        </div>
    );
};

export default UpdateStock;