import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'http://localhost:3005/';

const register = (name, email, phone, password, age) => {
    return axios.post(API_URL + 'register', {
        name,
        email,
        phone,
        password,
        age
    },{
    withCredentials: true
});
};
const registerOwner = (name, email, phone, password, age) => {
    return axios.post(API_URL + 'register/owner', {
        name,
        email,
        phone,
        password,
        age
    },{
    withCredentials: true
});
};

const login = function (email, password) {
    return axios.post(API_URL + 'login', { email, password })
        .then(response => {
            if (response.data.token) {
                // Set the token in a cookie
                Cookies.set('token', response.data.token, { expires: 7, secure: true, sameSite: 'Strict' }); // Options: expires in 7 days, secure, and same-site protection

                // Optionally store user data in localStorage
                const { token, ...userData } = response.data;
                localStorage.setItem('user', JSON.stringify(userData));
            }
            return response.data;
        });
}

// const login = (email, password) => {
//     return axios.post(API_URL + 'login', {
//         email,
//         password
//     }).then(response => {
//         if(response.data.token) {
//             localStorage.setItem('user', JSON.stringify(response.data));
//         }
//         return response.data;
//     });
// };

const logout = () => {
    // localStorage.removeItem('user');
    Cookies.remove('token');
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

const authHeader = () => {
    const user = getCurrentUser();
    if (user && user.token) {
        return { Authorization: 'Bearer ' + user.token };
    } else {
        return {};
    }
};
const authService = {
    register,
    registerOwner,
    login,
    logout,
    getCurrentUser,
    authHeader
};

export default authService;