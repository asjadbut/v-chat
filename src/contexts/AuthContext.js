import React from "react";
import { useContext, createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from "../Firebase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user2) => {
            setUser(user2);
            setLoading(false);
            if (user) navigate('/chats');
            else navigate('/');
        });
    }, [user, navigate]);

    const value = { user };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );

}
