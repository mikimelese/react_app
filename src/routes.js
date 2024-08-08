import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import { AuthProvider } from './contexts/AuthContext';
import withRole from './components/withRole';
import ListofCustomer from './components/ListofCustomer';
const RoleProtectedListofCustomer = withRole(ListofCustomer);

const AppRoutes = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/list" element={<RoleProtectedListofCustomer/>} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default AppRoutes;

// import React from 'react';
// import Register from './components/Register';

// const Routes = () => {
//     return (
//         <div>
//             <Register />
//         </div>
//     );
// };

// export default Routes;