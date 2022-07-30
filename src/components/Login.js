import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import {signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import auth from '../Firebase';
const provider = new GoogleAuthProvider();
const provider2 = new FacebookAuthProvider();

// arrow function for google authentication
const google_signin = () => { signInWithPopup(auth, provider) }

// arrow function for facebook authentication
const facebook_signin = () => { signInWithPopup(auth, provider2); }

// login page component
export default function Login() {
    return (
        <div>
            <div className='login-page'>
                <div className='login-card'>
                    <h2>Welcome to V Chat</h2>
                    <div className='google login-btn' onClick={google_signin}>
                        <GoogleOutlined /> Sign In with Google
                    </div>
                    <br />
                    <div className='facebook login-btn' onClick={facebook_signin}>
                        <FacebookOutlined /> Sign In with Facebook
                    </div>
                </div>
            </div>
        </div>
    )
}