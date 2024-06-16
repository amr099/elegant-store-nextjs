"use client";

import styles from "./WishlistItem.module.scss";
import Image from "next/image";
import { removeFromWishlist } from "@/app/lib/actions";

export default function WishlistItem({ item }) {
    return (
        <tr className={styles.wishlistItem}>
            <td>
                {" "}
                <div className='flex'>
                    <Image
                        src='/icons/close.svg'
                        alt='close'
                        width={24}
                        height={24}
                        onClick={() => removeFromWishlist(item.product_id)}
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
    );
}
