import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from './components/Register';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/register' component={Register} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;