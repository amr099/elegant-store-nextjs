"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { DrawersContext } from "@/context/DrawersContext";
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function Navbar() {
    const pathname = usePathname();
    const { setMobileNav, setFlyoutCart } = useContext(DrawersContext);
    const { count } = useContext(CartContext);

    const activeLink = {
        fontWeight: 700,
        color: "var(--neutral-7)",
    };

    return (
        <div className='container'>
            <header className={styles.header}>
                <div className='flex'>
                    <Image
                        src='/icons/menu.svg'
                        alt='menu'
                        className='icon'
                        onClick={() => setMobileNav(true)}
                        width={40}
                        height={40}
                    />
                    <Link href='/' className={styles.main}>
                        3legant<span>.</span>
                    </Link>
                </div>
                <nav className={styles.nav}>
                    <Link href='/' style={pathname === "/" ? activeLink : {}}>
                        Home
                    </Link>
                    <Link
                        href='/shop'
                        style={pathname === "/shop" ? activeLink : {}}
                    >
                        Shop
                    </Link>
                    <Link
                        href='/blog'
                        style={pathname === "/blog" ? activeLink : {}}
                    >
                        Blog
                    </Link>
                    <Link
                        href='/contact'
                        style={pathname === "/contact" ? activeLink : {}}
                    >
                        Contact Us
                    </Link>
                </nav>
                <div className={styles.icons}>
                    <Link href='/search'>
                        <img
                            src='/icons/search.svg'
                            alt='search'
                            className='icon'
                        />
                    </Link>

                    <Link href='/profile'>
                        <img
                            src='/icons/user.svg'
                            alt='user'
                            className='icon'
                        />
                    </Link>
                    <div className='flex'>
                        <img
                            src='/icons/bag.svg'
                            alt='bag'
                            className='icon'
                            onClick={() => setFlyoutCart(true)}
                        />
                        {count != 0 && <span>{count}</span>}
                    </div>
                </div>
            </header>
        </div>
    );
}
