'use client';

import Link from "next/link"
import React from "react";
import LogInModal from "./LogIn";
import SignUpModal from "./SignUp";
import { useAuth } from "./AuthContext"; 
import { Playfair_Display } from 'next/font/google'
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['900'] })


export default function Navbar() {
    const { user, logout } = useAuth();
    const [loginOpen, setLoginOpen] = React.useState(false);
    const [signupOpen, setSignupOpen] = React.useState(false);
  
    const handleLoginOpen = () => setLoginOpen(true);
    const handleSignupOpen = () => setSignupOpen(true);
    const handleClose = () => {
      setLoginOpen(false);
      setSignupOpen(false);
    };

    const signUpButtonStyle = {
        padding: '8px',
        fontSize: '15px',
        fontWeight: 'bold',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'inline-block',
        textAlign: 'center' as const,
        lineHeight: '1.5'
      };

    const logInButtonStyle = {
        padding: '8px',
        fontSize: '15px',
        fontWeight: 'bold',
        backgroundColor: 'white',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'inline-block',
        textAlign: 'center' as const,
        lineHeight: '1.25'
      };


    return (
<<<<<<< HEAD
        <>
            <nav className="bg-white border-b border-gray-400 p-4 pl-8 pr-8">
                <div className="flex justify-between items-center">
                    <Link prefetch={false} href="/" className={playfair.className + " flex items-center"}>
                        <img
                            src="/favicon.ico"
                            alt="Logo"
                            className="w-12 h-12 mr-0.1" // Adjust the width and height as needed
                        />
                        <span className="text-self-center whitespace-nowrap text-3xl font-extrabold text-rose-900 hover:text-rose-950">RateMy</span>
                        <span className="text-self-center whitespace-nowrap text-3xl font-extrabold text-slate-900">Housing</span>
                    </Link>
                    <div>
                        <Link href="/about" className="text-self-center text-1xl font-bold text-rose-900 hover:text-rose-950 underline mr-2">About</Link>
                        <Link href="/new-listing" className="text-self-center text-1xl font-bold text-rose-900 hover:text-rose-950 underline mr-2">Add Listing</Link>
                        <a onClick={handleLoginOpen} style={logInButtonStyle} className=" border text-rose-900 hover:text-rose-950 border-rose-900 hover:border-rose-950 mr-1">Log In</a>
                        <a onClick={handleSignupOpen} style={signUpButtonStyle} className="bg-rose-900 hover:bg-rose-950">Sign Up</a>
                    </div>
=======
    <>
        <nav className="bg-white border-b border-gray-400 p-4 pl-8 pr-8">
        <div className="flex justify-between items-center">
            <Link href="/">
            {/* ... your existing logo and text */}
            </Link>
            <div>
            <Link href="/about" className="text-self-center text-1xl font-bold text-rose-900 hover:text-rose-950 underline mr-2">
                About
            </Link>
            <Link href="/new-listing" className="text-self-center text-1xl font-bold text-rose-900 hover:text-rose-950 underline mr-2">
                Add Listing
            </Link>
            {user ? (
                // If user is logged in, show their name and a logout button
                <div>
                <span className="mr-2">Welcome, {user.displayName}!</span>
                <button onClick={logout} className="bg-rose-900 hover:bg-rose-950 text-white px-3 py-1 rounded">
                    Logout
                </button>
                </div>
            ) : (
                // If user is not logged in, show login and sign up buttons
                <div>
                <a onClick={handleLoginOpen} style={logInButtonStyle} className="border text-rose-900 hover:text-rose-950 border-rose-900 hover:border-rose-950 mr-1">
                    Log In
                </a>
                <a onClick={handleSignupOpen} style={signUpButtonStyle} className="bg-rose-900 hover:bg-rose-950">
                    Sign Up
                </a>
>>>>>>> 76a9eee7c05311a4869a92ebacac1446a74e2b3d
                </div>
            )}
            </div>
        </div>
        </nav>
        <LogInModal open={loginOpen} handleClose={handleClose} openSignUpModal={handleSignupOpen} />
        <SignUpModal open={signupOpen} handleClose={handleClose} />
    </>
    );
}

