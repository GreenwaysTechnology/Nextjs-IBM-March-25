'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import '../link.css'
export default function NavBar() {
    const pathname = usePathname()
    return <nav>
        <ul>
            <li>
                <Link className={`link ${pathname === '/' ? 'active' : ''}`} href={{ pathname: '/' }} >Home</Link>
            </li>
            <li>
                <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href={{ pathname: '/about' }} >About</Link>
            </li>
            <li>
                <Link className={`link ${pathname === '/products' ? 'active' : ''}`} href={{ pathname: '/products' }} >Products</Link>
            </li>
            <li>
                <Link className={`link ${pathname === '/dashboard' ? 'active' : ''}`} href={{ pathname: '/dashboard' }} >Dashboard</Link>
            </li>
        </ul>
    </nav>
}