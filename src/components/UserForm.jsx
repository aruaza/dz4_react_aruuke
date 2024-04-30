import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from './UserSlice.jsx';

const UserForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateUser(formData));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
                Age:
                <input type="text" name="age" value={formData.age} onChange={handleChange} />
            </label>
            <label>
                Gender:
                <input type="text" name="gender" value={formData.gender} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;
