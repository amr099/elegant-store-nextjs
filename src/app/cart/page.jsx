"use client";

import styles from "./Cart.module.css";
import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import CartItem from "@/app/ui/CartItem/CartItem";
import FlyoutCartItem from "@/app/ui/FlyoutCart/FlyoutCartItem";
import Image from "next/image";
import { CartContext } from "@/context/CartContext";

export default function Page() {
    const { cart, total } = useContext(CartContext);
    const isMobile = useMediaQuery({ maxWidth: 769 });
    return (
        <div className={styles.cartContainer}>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr className={styles.tr}>
                        <td>Product</td>
                        <td>Quantity</td>
                        <td>Price</td>
                        <td>Subtotal</td>
                    </tr>
                </thead>
                <tbody>
                    {cart?.map((item) =>
                        isMobile ? (
                            <FlyoutCartItem item={item} key={item?.id} />
                        ) : (
                            <CartItem item={item} key={item?.id} />
                        )
                    )}
                </tbody>
            </table>
            <div className={styles.summary}>
                <h6 className={styles.h6}>Cart summary</h6>
                <div className={styles.checkbox}>
                    <div className='flex'>
                        <input type='checkbox' id='shipping' />
                        <label className={styles.label} htmlFor='shipping'>
                            Free shipping
                        </label>
                    </div>
                    <span>$0.00</span>
                </div>

                <div className={styles.checkbox}>
                    <div className='flex'>
                        <input type='checkbox' id='express' />
                        <label className={styles.label} htmlFor='express'>
                            Express shipping
                        </label>
                    </div>
                    <span>+$15.00</span>
                </div>

                <div className={styles.checkbox}>
                    <div className='flex'>
                        <input type='checkbox' id='pick' />
                        <label className={styles.label} htmlFor='pick'>
                            Pick Up
                        </label>
                    </div>
                    <span>%21</span>
                </div>

                <div className='flexBetween'>
                    <span>Subtotal</span>
                    <span>${total}</span>
                </div>
                <div className='flexBetween'>
                    <span className='h7'>Total</span>
                    <span className='h7'>${total + 36}</span>
                </div>
                <Link href='/cart/checkout' className='button'>
                    Checkout
                </Link>
            </div>
            <div className={styles.coupon}>
                <h6>Have a coupon?</h6>
                <p>Add your code for an instant cart discount</p>
                <div className={styles.couponInput}>
                    <Image
                        src='/icons/money.svg'
                        alt='money'
                        width={24}
                        height={24}
                    />
                    <input type='text' placeholder='Coupon Code' />
                    <button>Apply</button>
                </div>
            </div>
        </div>
    );
}
