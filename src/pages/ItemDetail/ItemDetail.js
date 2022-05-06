import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useItemDetail from '../../hooks/useItemDetail/useItemDetail';
import useItems from '../../hooks/useItems/useItems';
import UpdateStock from '../UpdateStock/UpdateStock';

const ItemDetail = () => {
    const { itemId } = useParams();
    const [item, setItem] = useItemDetail(itemId);

    const [items, setItems] = useItems();


    const navigate = useNavigate();


    const navigateManage = event => {
        navigate('/manage');
        // navigate('/items');
    }

    // const { itemId } = useParams();
    // console.log(itemId);
    // const [item, setItem] = useState({});
    useEffect(() => {
        const url = `https://arcane-everglades-80652.herokuapp.com/item/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [itemId]);

    const handleUpdateItem = event => {
        event.preventDefault();

        const quantity = item.quantity - 1;
        // const quantity = event.target.quantity.value
        // console.log(quantity);

        const updatedItem = { quantity };
        // console.log(quantity);


        //send data to the server
        const url = `https://arcane-everglades-80652.herokuapp.com/item/${itemId}`;
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
                alert('Item Delivered Successfully!');
                event.target.reset();

                const remaining = quantity;
                setItem(remaining);

            })
    }


    return (
        <div className='item-detail-container'>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title>Item Title: {item.name}</Card.Title>
                    <Card.Text>
                        {item.description}
                        <p style={{ fontSize: "20px" }}>price: {item.price}</p>
                        <p style={{ fontSize: "25px" }}>Qunatity: {item.quantity}</p>
                        <p>Supplier: {item.supplier}</p>
                    </Card.Text>
                    <button className='btn btn-secondary' onClick={handleUpdateItem}> Delivered </button>

                    {/* <Delivered></Delivered> */}

                    {/* <Button variant="secondary">Delivered</Button> */}
                </Card.Body>
            </Card>

            <h2>Update Stock</h2>

            <div>
                <h2>
                    Update Qunatity of {item.name}

                </h2>

                <UpdateStock></UpdateStock>

            </div>


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