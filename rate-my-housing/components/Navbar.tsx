import Link from "next/link"
import { Playfair_Display } from 'next/font/google'
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['900'] })

export default function Navbar() {
    return (
        <nav className="bg-white border-gray-300 p-4 drop-shadow-sm pl-8 pr-8">
            <div className="flex justify-between items-center">
                <Link href="/" className={playfair.className}>
                    <span className="text-self-center whitespace-nowrap text-3xl font-extrabold text-maroon">RateMy</span>
                    <span className="text-self-center whitespace-nowrap text-3xl font-extrabold text-slate-700">Housing</span>
                </Link>
                <div>
                    <Link href="/about" className="text-self-center text-1xl font-bold underline mr-2">About</Link>
                    <Link href="/signin" className="text-self-center text-1xl font-bold underline mr-2">Log In</Link>
                    <Link href="/signup" className="text-self-center text-1xl font-bold underline">Sign Up</Link>
                </div>
            </div>
        </nav>
    )
}

