import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
//import authService from '../services/authService'
import { AuthContext } from '../contexts/AuthContext';

const withRole = (WrappedComponent) => {

    return function(props) {
        const {role} = useContext(AuthContext);
        console.log(role);
        if (!role || role !== 'master'){
            //console.log(role);
            return <Navigate to="/register" />
        }
        return <WrappedComponent {...props} />
    };
};

export default withRole;