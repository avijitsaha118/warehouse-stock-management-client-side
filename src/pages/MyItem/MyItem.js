import { async } from '@firebase/util';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import useItems from '../../hooks/useItems/useItems';
import MyItems from '../MyItems/MyItems';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);

    console.log(myItems);
    const navigate = useNavigate();
    useEffect(() => {

        const getOrders = async () => {
            const email = user.email;
            const url = `http://localhost:5000/myitem?email=${email}`;
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
            <div className='item-container'>

            {
                myItems.map(item => <div key={item._id}>
                    <h4>{item.name}
                        <button className='btn btn-danger' onClick={() => handleDelete(item._id)}><i><FontAwesomeIcon icon={faTrash} /></i> Delete</button>
                    </h4>
                </div>
                )
            }
               

                {/* {
                    myItems.map(item => <MyItems
                        key={item._id}
                        item={item}
                    ></MyItems>)
                } */}
            </div>
        </div>
    );
};

export default MyItem;