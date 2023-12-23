"use client";
import styles from "./FlyoutCart.module.css";
import { useContext, useRef } from "react";
import Image from "next/image";
import CartContext from "@/context/CartContext";

export default function FlyoutCartItem({ item }) {
    const { removeFromCart, changeQuantity } = useContext(CartContext);
    const q = useRef(null);

    return (
        <div className={styles.flyoutCartItem}>
            <div className='flex'>
                <Image
                    src={item?.img}
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
                            changeQuantity(item?.id, q.current.value)
                        }
                        ref={q}
                    />
                </div>
            </div>
            <div className={styles.col}>
                <span>${Number(item?.price) * Number(item?.amount)}</span>
                <Image
                    src='/icons/close.svg'
                    alt='close'
                    onClick={() => removeFromCart(item.id)}
                />
            </div>
        </div>
    );
}
