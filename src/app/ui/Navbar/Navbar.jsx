"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { DrawersContext } from "@/context/DrawersContext";
export default function Navbar() {
    const { setMobileNav, setFlyoutCart } = useContext(DrawersContext);
    const { count } = useContext(CartContext);

    return (
        <div className='container'>
            <header className={styles.header}>
                <div className='flex'>
                    <img
                        src='/icons/menu.svg'
                        alt='menu'
                        className='icon'
                        onClick={() => setMobileNav(true)}
                    />
                    <Link href='/' className={styles.main}>
                        3legant<span>.</span>
                    </Link>
                </div>
                <nav className={styles.nav}>
                    <Link href='/'>Home</Link>
                    <Link href='/shop'>Shop</Link>
                    <Link href='/blog'>Blog</Link>
                    <Link href='/contact'>Contact Us</Link>
                </nav>
                <div className={styles.icons}>
                    <img
                        src='/icons/search.svg'
                        alt='search'
                        className='icon'
                    />
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
