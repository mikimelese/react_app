import React from 'react';
import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        try {
        await authService.logout();
            console.log('succesfuly logging out ');
            navigate('/login');
        } catch(error) {
                console.error('Error logout user', error);
            };
    };
    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Logout</button>
        </form>
    );
}

export default Logout;