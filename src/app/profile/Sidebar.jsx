"use client";
import styles from "./Profile.module.css";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Sidebar({ user }) {
    const isMobile = useMediaQuery({ maxWidth: 769 });
    const { replace } = useRouter();

    const links = [
        { title: "Account", link: "/profile" },
        { title: "Orders", link: "/profile/orders" },
        { title: "Wishlist", link: "/profile/wishlist" },
    ];

    const onChange = (link) => {
        replace(link);
    };

    return (
        <div className={styles.profile}>
            <div className={styles.info}>
                <img
                    src='/imgs/user-placeholder.jpg'
                    alt='profile'
                />
                <h6 className='h7'>{user?.email}</h6>
            </div>
            {isMobile ? (
                <>
                    <select
                        name='nav'
                        id='nav'
                        onChange={(e) => onChange(e.target.value)}
                    >
                        {links.map((link) => (
                            <option key={link.title} value={link.link}>
                                {link.title}
                            </option>
                        ))}
                    </select>
                    <br />
                    <br />
                    <button className={styles.logout} onClick={signOut}>
                        Logout
                    </button>
                </>
            ) : (
                <>
                    {links.map((link) => (
                        <Link
                            href={link.link}
                            key={link.title}
                            className={styles.a}
                        >
                            {link.title}
                        </Link>
                    ))}
                    <button className={styles.logout} onClick={signOut}>
                        Logout
                    </button>
                </>
            )}
        </div>
    );
}
