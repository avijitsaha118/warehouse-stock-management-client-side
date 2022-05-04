import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


//test component.. deleted soon.


const Delivered = () => {
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

        const quantity = item.quantity -1;
        // const quantity = event.target.quantity.value
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
                
                // const remaining = data;
                // setItem(remaining);

            })
    }

    return (
        <div>
       <button className='btn btn-secondary' onClick={handleUpdateItem}> Delivered </button>
        </div>
    );
};

export default Delivered;