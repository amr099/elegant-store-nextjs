"use client";

import { useMediaQuery } from "react-responsive";
import styles from "./WishlistItem.module.scss";
import Image from "next/image";

export default function WishlistItem({ item, onDelete }) {
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
                        onClick={() => onDelete(item.product_id)}
                    />
                    <img
                        src={item.img_url}
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
                    <img
                        src='/icons/close.svg'
                        alt='close'
                        onClick={() => onDelete(item.product_id)}
                    />
                    <img
                        src={item.img_url}
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
