"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
// import { Link, useLocation } from "react-router-dom";
// import { useContext } from "react";
// import { CartContext } from "../../context/CartContext";
import Image from "next/image";
export default function Navbar({ setNav, setFlyCart }) {
    // const location = useLocation();
    // const { count } = useContext(CartContext);
    const openMobileNav = () => {
        setNav(true);
    };
    const openCart = () => {
        setFlyCart(true);
    };
    return (
        <div className='container'>
            <header className={styles.header}>
                <div className='flex'>
                    <img
                        src='/icons/menu.svg'
                        alt='menu'
                        className='icon'
                        // onClick={openMobileNav}
                    />
                    <Link href='/' className={styles.main}>
                        3legant<span>.</span>
                    </Link>
                </div>
                <nav className={styles.nav}>
                    <Link
                        href='/'
                        // className={`animated ${
                        //     location.pathname === "/" && styles.active
                        // }`}
                    >
                        Home
                    </Link>
                    <Link
                        href='/shop'
                        // className={`animated ${
                        //     location.pathname === "/shop" && styles.active
                        // }`}
                    >
                        Shop
                    </Link>
                    <Link
                        href='/blog'
                        // className={`animated ${
                        //     location.pathname === "/blog" && styles.active
                        // }`}
                    >
                        Blog
                    </Link>
                    <Link
                        href='/contact'
                        // className={`animated ${
                        //     location.pathname === "/contact" && styles.active
                        // }`}
                    >
                        Contact Us
                    </Link>
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
                            // onClick={openCart}
                        />
                        {/* {count != 0 && <span>{count}</span>} */}
                    </div>
                </div>
            </header>
        </div>
    );
}
