"use client";

import { useContext } from "react";
import styles from "./MobileNav.module.css";
import Link from "next/link";
import { CartContext } from "@/context/CartContext";
import { DrawersContext } from "@/context/DrawersContext";

export default function MobileNav() {
    const { mobileNav, setMobileNav } = useContext(DrawersContext);
    const { count } = useContext(CartContext);

    return (
        mobileNav && (
            <dialog
                className={styles.mobileNav}
                open
                onClose={() => setMobileNav(false)}
            >
                <div className={styles.navContainer}>
                    <div className='flexBetween'>
                        <Link href='/' className={styles.main}>
                            3legant <span>.</span>
                        </Link>
                        <img
                            src='/icons/close.svg'
                            alt='close'
                            onClick={() => setMobileNav(false)}
                        />
                    </div>
                    <input type='search' placeholder='Search' />
                    {/* <nav> */}
                    <Link href='/' className='animated'>
                        Home
                    </Link>
                    <Link href='/shop' className='animated'>
                        Shop
                    </Link>
                    <Link href='/blog' className='animated'>
                        Blog
                    </Link>
                    <Link href='/contact' className='animated'>
                        Contact Us
                    </Link>
                    {/* </nav> */}
                </div>
                <div>
                    <div className='flexBetween'>
                        <span>Cart</span>
                        <div className='flex'>
                            <Link href='/cart'>
                                <img
                                    src='/icons/bag.svg'
                                    alt='bag'
                                    className='icon'
                                />
                            </Link>
                            {count != 0 && <span>{count}</span>}
                        </div>
                    </div>
                    <div className='flexBetween'>
                        <span>Whishlist</span>
                        <Link href='/profile/wishlist'>
                            <img
                                src='/icons/heart.svg'
                                alt='heart'
                                className='icon'
                            />
                        </Link>
                    </div>
                    <Link href='/login' className='button'>
                        Sign In
                    </Link>
                    <div className={styles.socials}>
                        <img src='/icons/instagram-black.svg' alt='instagram' />
                        <img src='/icons/facebook-black.svg' alt='facebook' />
                        <img src='/icons/youtube-black.svg' alt='youtube' />
                    </div>
                </div>
            </dialog>
        )
    );
}
