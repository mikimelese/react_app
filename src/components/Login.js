import React, { useContext, useState } from 'react';
import authService from '../services/authService';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { setRole } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleLogout = async e => {
        e.preventDefault();
        try {
        await authService.logout();
            console.log('succesfuly logging out ');
            // navigate('/login');
        } catch(error) {
                console.error('Error logout user', error);
            };
    };


    const handleSubmit = e => {
        e.preventDefault();
        authService.login(formData.email, formData.password)
            .then(response => {
                console.log('user is ', response.customer.role);
                setRole(response.customer.role);
                navigate('/list');
            })
            .catch(error => {
                console.error('Error registering user', error);
            });
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Login</button>
            <button onClick={handleLogout}>Logout</button>
        </form>
    );
}



export default Login;
