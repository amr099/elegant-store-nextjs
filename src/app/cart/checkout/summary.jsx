"use client";

import FlyoutCartItem from "@/app/ui/FlyoutCart/FlyoutCartItem";
import Image from "next/image";
import styles from "../Cart.module.css";
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

export default function Summary() {
    const { cart, total } = useContext(CartContext);

    return (
        <div className={styles.order}>
            <h6>Order summary</h6>
            {cart?.map((item) => (
                <FlyoutCartItem item={item} key={item?.id} />
            ))}
            <div className={styles.checkbox}>
                <input type='text' id='coupon' name='coupon' />
                <button>Apply</button>
            </div>
            <div className={styles.checkbox}>
                <div className='flex'>
                    <Image
                        src='/icons/money.svg'
                        alt='money'
                        width={24}
                        height={24}
                    />{" "}
                    <span>JenkateMW</span>
                </div>
                <p className={styles.discount}>-$25.00 [Remove]</p>
            </div>
            <div className={styles.checkbox}>
                <span>Shipping</span>
                <span className=''>Free</span>
            </div>
            <div className='flexBetween'>
                <span>Subtotal</span>
                <span className={styles.bold}>${total}</span>
            </div>
            <div className='flexBetween'>
                <span className='h7'>Total</span>
                <span className='h7'>${total}</span>
            </div>
        </div>
    );
}
