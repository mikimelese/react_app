import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [role, setRole] = useState(() => {
        // Check local storage for role when initializing state
        return localStorage.getItem('userRole') || null
    });

    useEffect(() => {
        if (role) {
            localStorage.setItem('userRole', role);
        } else {
            localStorage.removeItem('userRole');
        }
    }, [role]);

    const value = {
        role,
        setRole
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}