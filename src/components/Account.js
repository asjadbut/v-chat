import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatEngineWrapper, ChatEngine, Socket } from 'react-chat-engine';
import auth from '../Firebase';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';


export default function Account() {

    const { user,loading, setLoading } = useAuth();
    
    

    const navigate = useNavigate();
    const Logout = async () => {
        await auth.signOut();
        navigate('/');
    }

    const getProfilePic = async (url) => {
        const response = await fetch(url);
        const dp = await response.blob();
        return new File([dp], "userPhoto.jpg", { type: 'image/jpeg' })

    }

    useEffect(() => {
        if (!user) { navigate('/'); return; }

        
        axios.get('https://api.chatengine.io/users/me', {
            headers: {
                "Project-ID": "7f8d5183-7c2c-474d-bc59-091e7c54ebb5",
                "User-Name": user.email,
                "User-Secret": user.uid
            }
        })
        .then(() => {
            setLoading(false)
        })
            .catch(() => {
                let formdata = new FormData();
                formdata.append('email', user.email);
                formdata.append('username', user.displayName);
                formdata.append('secret', user.uid);
                getProfilePic(user.photoURL).then((avatar) => {
                    formdata.append('avatar', avatar, avatar.name);
                });
                axios.post("https://api.chatengine.io/users/",
                    formdata,
                    { headers: { 'PRIVATE-KEY': 'vd0f42468-8bdb-4336-8a35-c22485ab1269' } })
                    .then(() => setLoading(false))
                    .catch((err) => console.log(err));
            });

    }, [user, navigate]);

    if (!user || loading) return 'loading';
    return (
        <div className='chat-page'>
            <div className='nav-bar'>
                <div className='logo-tab'>
                    V-Chat
                </div>
                <div className='logout-tab' onClick={Logout}>
                    <span>Logout</span>
                </div>
            </div>

            <ChatEngine
                height="calc(100vh-66px)"
                projectID="7f8d5183-7c2c-474d-bc59-091e7c54ebb5"
                userName={user.email}
                userSecret={user.uid}
            />



        </div>
    )
}