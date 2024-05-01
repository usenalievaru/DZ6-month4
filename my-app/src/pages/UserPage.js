import React, {useState} from 'react';
import { useForm } from 'react-hook-form';

function UserPage({ onSubmit }) {


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true })} placeholder="Name" />
            {errors.name && <span>Name is required</span>}
            <input {...register("username", { required: true })} placeholder="Username" />
            {errors.username && <span>Username is required</span>}
            <input {...register("email", { required: true })} placeholder="Email" />
            {errors.email && <span>Email is required</span>}
            <input {...register("phone", { required: true })} placeholder="Phone" />
            {errors.phone && <span>Phone is required</span>}
            <input {...register("website")} placeholder="Website" />
            <button type="submit">Create</button>
            <button type="button" onClick={() => reset()}>Clear Table</button>
        </form>
    );
}

export default UserPage;
