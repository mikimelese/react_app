import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </Router>
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