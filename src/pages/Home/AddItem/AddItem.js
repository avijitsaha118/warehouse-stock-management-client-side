import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = (event) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                // .then(response => {
                //     const { data } = response;

                //                 if(data.insertedId){
                //                  event.target.reset();
                // }

            });
    };

    return (
        <div className='w-50 mx-auto'>
            <h2>Add New Item</h2>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' required {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Description' required {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" required {...register("price")} />
                <input className='mb-2' placeholder='Qunatity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Supplier Name' type="text" {...register("supplier")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;