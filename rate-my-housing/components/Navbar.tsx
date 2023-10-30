import Link from "next/link"
import { Playfair_Display } from 'next/font/google'
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['900'] })

export default function Navbar() {
    return (
        <nav className="bg-white dark:bg-slate-900 border-gray-300 dark:border-gray-700 p-4 sticky top-0 drop-shadow-sm z-10 pl-8 pr-8">
            <div className="flex justify-between items-center">
                <Link href="/" className={playfair.className}>
                    <span className="text-self-center whitespace-nowrap text-3xl font-extrabold text-maroon">RateMy</span>
                    <span className="text-self-center whitespace-nowrap text-3xl font-extrabold text-slate-700">Housing</span>
                </Link>
                <div>
                    <Link href="/about" className="text-self-center text-1xl font-bold underline mr-2">About</Link>
                    <Link href="/signin" className="text-self-center text-1xl font-bold underline">Log In</Link>
                </div>
            </div>
        </nav>
    )
}

