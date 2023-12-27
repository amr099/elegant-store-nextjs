"use client";

import { useMediaQuery } from "react-responsive";
import styles from "./WishlistItem.module.css";
import Image from "next/image";

export default function WishlistItem({ item }) {
    const isMobile = useMediaQuery({ maxWidth: 769 });
    return !isMobile ? (
        <tr className={styles.wishlistItem}>
            <td>
                {" "}
                <div className='flex'>
                    <Image
                        src='/icons/close.svg'
                        alt='close'
                        width={24}
                        height={24}
                    />
                    <Image
                        src='imgs/p-color.png'
                        alt='cartItem-img'
                        width={80}
                        height={80}
                    />
                    <div className={styles.col}>
                        <span>{item.name}</span>
                    </div>
                </div>
            </td>
            <td>${item.price}</td>
            <td>
                <button>Add to cart</button>
            </td>
        </tr>
    ) : (
        <tr className={styles.wishlistItemMobile}>
            <td>
                {" "}
                <div className='flex'>
                    <img src='/icons/close.svg' alt='close' />
                    <img
                        src='/imgs/p-color.png'
                        alt='cartItem-img'
                        width={"80"}
                        height={"80"}
                    />
                    <div className={styles.col}>
                        <span>{item.name}</span>
                        <span>${item.price}</span>
                    </div>
                </div>
            </td>
            <td>
                <button>Add to cart</button>
            </td>
        </tr>
    );
}
