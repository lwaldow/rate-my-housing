'use client';

import Link from "next/link"
import { Playfair_Display } from 'next/font/google'
import React from "react";
import SignInModal from "./SignIn";
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['900'] })


export default function Navbar() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <nav className="bg-white border-gray-300 p-4 drop-shadow-sm pl-8 pr-8">
                <div className="flex justify-between items-center">
                    <img
                    src="/favicon.ico"
                    alt="Logo"
                    className="w-12 h-12 mr-0.1" // Adjust the width and height as needed
                    />
                    <Link href="/" className={playfair.className}>
                        <span className="text-self-center whitespace-nowrap text-3xl font-extrabold text-maroon">RateMy</span>
                        <span className="text-self-center whitespace-nowrap text-3xl font-extrabold text-slate-700">Housing</span>
                    </Link>
                    <div>
                        <Link href="/about" className="text-self-center text-1xl font-bold text-maroon underline mr-2">About</Link>
                        <a onClick={handleOpen} className="text-self-center text-1xl font-bold text-maroon underline mr-2">Log In</a>
                        <Link href="/signup" className="text-self-center text-1xl font-bold text-maroon underline">Sign Up</Link>
                    </div>
                </div>
            </nav>
            <SignInModal open={open} handleClose={handleClose} />
        </>
    )
}

