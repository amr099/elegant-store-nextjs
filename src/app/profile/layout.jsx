"use client";

import styles from "./Profile.module.css";
import { useMediaQuery } from "react-responsive";
import { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import Image from "next/image";
// import { Navigate } from "react-router-dom";
import { useRouter } from "next/navigation";

export default function Layout({ children }) {
    const { user, setUser } = useContext(AuthContext);
    const isMobile = useMediaQuery({ maxWidth: 769 });
    // const router = useRouter();

    const links = [
        { title: "Account", link: "" },
        { title: "Address", link: "/profile/address" },
        { title: "Orders", link: "/profile/orders" },
        { title: "Wishlist", link: "/profile/wishlist" },
    ];

    // const onChange = (event) => {
    //     router.push(event.target.value);
    // };

    // const logout = () => {
    //     setUser(false);
    //     router.push("/");
    // };
    return (
        <div className='container'>
            <div className={styles.user}>
                <h3 className={styles.h3}>My Account</h3>
                <div className={styles.profileContainer}>
                    <div className={styles.profile}>
                        <div className={styles.info}>
                            <Image
                                src={user?.avatar}
                                alt='profile'
                                width={50}
                                height={50}
                            />
                            <h6>{user?.name}</h6>
                        </div>
                        {isMobile ? (
                            <>
                                <select
                                    name=''
                                    id=''
                                    // onChange={(e) => onChange(e)}
                                >
                                    {links.map((link) => (
                                        <option
                                            key={link.title}
                                            value={link.link}
                                        >
                                            {link.title}
                                        </option>
                                    ))}
                                </select>
                                <br />
                                <br />
                                <button
                                    className={styles.logout}
                                    // onClick={logout}
                                >
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
                                <button
                                    className={styles.logout}
                                    // onClick={logout}
                                >
                                    Logout
                                </button>
                            </>
                        )}
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
    // ) : (
    //     <Navigate to='/login' />
    // );
}
