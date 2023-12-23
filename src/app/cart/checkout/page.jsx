"use client";

import styles from "../Cart.module.css";
import { useContext } from "react";
import { useRouter } from "next/router";
import FlyoutCartItem from "@/app/ui/FlyoutCart/FlyoutCartItem";
import Image from "next/image";
import { CartContext } from "@/context/CartContext";

export default function Page() {
    const { cart, total } = useContext(CartContext);
    // const router = useRouter();

    const onSubmit = (e) => {
        e.preventDefault();
        // router.push("/cart/complete");
    };
    return (
        <div className={styles.checkout}>
            <form onSubmit={onSubmit} className={styles.form}>
                <fieldset className={styles.fieldset}>
                    <legend>Contact Information</legend>
                    <div className={styles.inputDiv}>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' id='name' name='name' required />
                    </div>
                    <div className={styles.inputDiv}>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' id='email' name='email' required />
                    </div>
                    <div className={styles.inputDiv}>
                        <label htmlFor='phone'>Phone:</label>
                        <input type='tel' id='phone' name='phone' />
                    </div>
                </fieldset>

                <fieldset className={styles.fieldset}>
                    <legend>Shipping Information</legend>
                    <div className={styles.inputDiv}>
                        <label htmlFor='address'>Address:</label>
                        <input id='address' name='address' required></input>
                    </div>
                    <div className={styles.inputDiv}>
                        <label htmlFor='city'>City:</label>
                        <input type='text' id='city' name='city' required />
                    </div>
                    <div className={styles.inputDiv}>
                        <label htmlFor='zip'>ZIP Code:</label>
                        <input type='text' id='zip' name='zip' required />
                    </div>
                </fieldset>

                <fieldset className={styles.fieldset}>
                    <legend>Payment Information</legend>
                    <div className={styles.inputDiv}>
                        <label htmlFor='card'>Credit Card Number:</label>
                        <input type='text' id='card' name='card' required />
                    </div>
                    <div className={styles.inputDiv}>
                        <label htmlFor='expiry'>Expiration Date:</label>
                        <input
                            type='text'
                            id='expiry'
                            name='expiry'
                            placeholder='MM/YYYY'
                            required
                        />
                    </div>
                    <div className={styles.inputDiv}>
                        <label htmlFor='cvv'>CVV:</label>
                        <input type='text' id='cvv' name='cvv' required />
                    </div>
                </fieldset>

                <button onClick={onSubmit}>Place Order</button>
            </form>

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
                    <span className='h7'>${total - 25}</span>
                </div>
            </div>
        </div>
    );
}
