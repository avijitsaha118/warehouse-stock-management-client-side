import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);

    // console.log(myItems);
    // const navigate = useNavigate();
    useEffect(() => {

        const getOrders = async () => {
            const email = user.email;
            const url = `https://arcane-everglades-80652.herokuapp.com/myitem?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);

                // const { data } = await axios.get(url, {
                //     headers: {
                //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
                //     }
                // });

                setMyItems(data);
            }
            catch (error) {
                // console.log(error);
                // if (error.response.status === 401 || error.response.status === 403) {
                //     signOut(auth);
                //     navigate('/login');
                // }
            }
        }
        getOrders();
    }, [user])


    // const [items, setItems] = useItems();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://arcane-everglades-80652.herokuapp.com/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = myItems.filter(item => item._id !== id);
                    setMyItems(remaining);
                })
        }
    }

    return (
        <div>
            <h2>
                My Item :{myItems.length}

            </h2>

            {
                myItems.map(item => <div key={item._id}>

                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th>Item Name: {item.name}</th>
                                <th>Quantity: {item.quantity}</th>
                                <th>Supplier: {item.supplier}</th>
                                <th><button className='btn btn-danger' onClick={() => handleDelete(item._id)}><i><FontAwesomeIcon icon={faTrash} /></i> Delete</button></th>
                            </tr>
                        </thead>
                    </Table>
                </div>
                )
            }

        </div>
    );
};

export default MyItem;