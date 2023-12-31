"use client";

import styles from "./FlyoutCart.module.css";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import FlyoutCartItem from "./FlyoutCartItem";
import { CartContext } from "@/context/CartContext";
import { DrawersContext } from "@/context/DrawersContext";

export default function FlyoutCart() {
    const { flyoutCart, setFlyoutCart } = useContext(DrawersContext);
    const { cart, total } = useContext(CartContext);
    return (
        flyoutCart && (
            <div className={styles.flyoutCart}>
                <div>
                    <div className={styles.header}>
                        <h6>Cart</h6>
                        <Image
                            src='/icons/close.svg'
                            alt='close'
                            width={30}
                            height={30}
                            onClick={() => setFlyoutCart(false)}
                        />
                    </div>
                    <div className={styles.itemsContainer}>
                    {cart?.map((item) => (
                        <FlyoutCartItem key={item?.product_id} item={item} />
                    ))}
                        </div>
                </div>
                <div className={styles.col}>
                    <div className='flexBetween'>
                        <span className='body2'>Subtotal</span>
                        <span className='body2-semi'>${total}</span>
                    </div>
                    <div className='flexBetween'>
                        <span className='h7'>Total</span>
                        <span className='h7'>{total}</span>
                    </div>
                    <Link href='/cart/checkout' className='button'>
                        Checkout
                    </Link>
                    <Link href='/cart'>View Cart</Link>
                </div>
            </div>
        )
    );
}
