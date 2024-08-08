import { useState, useEffect } from 'react';
import axios from 'axios';

const useUserList =  function ()  {
    const [users, setUsers] = useState([]);

    useEffect( () => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3005/customer',{
    withCredentials: true
}); // Adjust URL to your API endpoint
                setUsers(response.data);
            } catch (error) {
                console.error('There was an error fetching the user data!', error);
            }
        };

        fetchUsers();
    }, []);

    return users;
}

// const ListService = {
//     UserList,
// }

export default useUserList;