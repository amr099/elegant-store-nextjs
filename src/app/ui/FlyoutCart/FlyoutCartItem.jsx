"use client";

import { CartContext } from "@/context/CartContext";
import styles from "./FlyoutCart.module.scss";
import Image from "next/image";
import { useContext, useRef } from "react";

export default function FlyoutCartItem({ item }) {
    const { removeFromCart, changeQuantity } = useContext(CartContext);
    const q = useRef(null);

    return (
        <div className={styles.flyoutCartItem}>
            <div className='flex'>
                <img
                    src={item?.img_url}
                    alt='cartItem-img'
                    width={"80"}
                    height={"80"}
                />
                <div className={styles.col}>
                    <span>{item?.name}</span>
                    {/* <span className={styles.color}>Color: Black</span> */}
                    <input
                        type='number'
                        min={1}
                        value={item?.amount}
                        onChange={() =>
                            changeQuantity(item?.product_id, q.current.value)
                        }
                        ref={q}
                    />
                </div>
            </div>
            <div className={styles.col}>
                <span>${Number(item?.price) * Number(item?.amount)}</span>
                <img
                    src='/icons/close.svg'
                    alt='close'
                    onClick={() => removeFromCart(item.product_id)}
                />
            </div>
        </div>
    );
}
