import React from 'react';
import useUserList from '../services/ListService';
import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';

const ListofCustomer = function ()  {
    const users = useUserList();
    const navigate = useNavigate();
    const handleLogout = async e => {
        
        e.preventDefault();
        try {
        await authService.logout();
            console.log('succesfuly logging out ');
            navigate('/register');
        } catch(error) {
                console.error('Error logout user', error);
            };
    };
    return (
        <div>
            <h2>User List</h2>
            <button onClick={handleLogout}>Logout</button>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <strong>Name:</strong> {user.name} <br />
                        <strong>Email:</strong> {user.email} <br />
                        <strong>Role:</strong> {user.role}
                    </li>
                    
                ))}
            </ul>
        </div>
    )
}

export default ListofCustomer;