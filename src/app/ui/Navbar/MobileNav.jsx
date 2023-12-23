"use client";

import styles from "./MobileNav.module.css";
import { useContext } from "react";
// import { CartContext } from "../../context/CartContext";
import Image from "next/image";
import Link from "next/link";

// eslint-disable-next-line react/prop-types
export default function MobileNav({ nav, setNav }) {
    // const { count } = useContext(CartContext);

    const closeMobileNav = () => {
        setNav(false);
    };
    return (
        nav && (
            <dialog className={styles.mobileNav} open onClose={closeMobileNav}>
                <div className={styles.navContainer}>
                    <div className='flexBetween'>
                        <Link href='/' className={styles.main}>
                            3legant <span>.</span>
                        </Link>
                        <img
                            src='/assets/icons/close.svg'
                            alt='close'
                            onClick={closeMobileNav}
                        />
                    </div>
                    <input type='search' placeholder='Search' />
                    {/* <nav> */}
                    <Link href='/' className='animated'>
                        Home
                    </Link>
                    <Link to='/shop' className='animated'>
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
                            {/* {count != 0 && <span>{count}</span>} */}
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
