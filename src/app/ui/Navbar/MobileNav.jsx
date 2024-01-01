"use client";

import { useContext } from "react";
import styles from "./MobileNav.module.css";
import Link from "next/link";
import { CartContext } from "@/context/CartContext";
import { DrawersContext } from "@/context/DrawersContext";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function MobileNav({ wishlist, user }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const { mobileNav, setMobileNav } = useContext(DrawersContext);
    const { count } = useContext(CartContext);

    const onSearch = (q) => {
        const params = new URLSearchParams(searchParams);
        params.set("q", q);
        replace(`/search?${params.toString()}`);
    };

    const activeLink = {
        fontWeight: 700,
    };

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
                    <input
                        type='search'
                        placeholder='Search'
                        onChange={(e) => onSearch(e.target.value)}
                    />
                    {/* <nav> */}
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
                        <div className='flex'>
                            <Link href='/profile/wishlist'>
                                <img
                                    src='/icons/heart.svg'
                                    alt='heart'
                                    className='icon'
                                />
                            </Link>
                            {wishlist?.length != 0 && (
                                <span>{wishlist?.length}</span>
                            )}
                        </div>
                    </div>
                    {user ? (
                        <Link href='/profile' className='button'>
                            Go to profile
                        </Link>
                    ) : (
                        <Link href='/login' className='button'>
                            Sign In
                        </Link>
                    )}
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
