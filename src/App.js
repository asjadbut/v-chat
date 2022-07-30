import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Account from './components/Account';
import './App.css';
import { AuthProvider } from './contexts/AuthContext'

export default function App() {
    return (
        <div>
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route path='/' element={<Login />}></Route>
                        <Route path='/chats' element={<Account />}></Route>
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    );
}