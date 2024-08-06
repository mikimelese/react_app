import React, { useState } from 'react';
import authService from '../services/authService';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        role: '',
        age: ''
    });

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        authService.register(formData.name, formData.email, formData.phone, formData.password,  formData.age)
            .then(response => {
                console.log('User registered successfully', response.data);
            })
            .catch(error => {
                console.error('Error registering user', error);
            });
    };

    const handleSubmitOwner = e => {
        e.preventDefault();
        authService.registerOwner(formData.name, formData.email, formData.phone, formData.password,  formData.age)
            .then(response => {
                console.log('User registered successfully', response.data);
            })
            .catch(error => {
                console.error('Error registering user', error);
            });
    };

    return (
        <form onSubmit={formData.role === 'owner'? handleSubmitOwner : handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="text" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required />
            <input type="text" name="age" placeholder="Age" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <select name="role" onChange={handleChange} required>
                <option value="">Select Role</option>
                <option value="customer">Customer</option>
                <option value="owner">Admin</option>
            </select>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
