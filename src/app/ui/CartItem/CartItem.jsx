"use client";

import { CartContext } from "@/context/CartContext";
import styles from "./CartItem.module.scss";
import Image from "next/image";
import { useContext, useRef } from "react";
export default function CartItem({ item }) {
    const { removeFromCart, changeQuantity } = useContext(CartContext);
    const q = useRef(null);
    return (
        <tr className={styles.tr}>
            <td className={styles.td}>
                <div className='flex'>
                    <Image
                        src={item?.img_url}
                        alt='cartItem-img'
                        width={80}
                        height={80}
                    />
                    <div className={styles.col}>
                        <span className={styles.name}>{item?.name}</span>
                        {/* <span className={styles.color}>Color: Black</span> */}
                        <Image
                            src='/icons/close.svg'
                            alt='close'
                            width={24}
                            height={24}
                            onClick={() => removeFromCart(item?.product_id)}
                        />
                    </div>
                </div>
            </td>
            <td>
                <input
                    className={styles.input}
                    type='number'
                    min={1}
                    value={item?.amount}
                    onChange={() =>
                        changeQuantity(item?.product_id, q.current.value)
                    }
                    ref={q}
                />
            </td>
            <td className={styles.price}>${item?.price}</td>
            <td className={styles.sub}>${item?.price * item?.amount}</td>
        </tr>
    );
}
