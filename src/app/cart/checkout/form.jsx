"use client";

import { useRouter } from "next/navigation";
import styles from "../Cart.module.css";

export default function Form() {
    const { replace } = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/neworder", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ amount: 1200 }),
            });

            if (response.ok) {
                const data = await response.json();
                replace("/cart/complete");
                console.log(
                    "Order placed successfully. Order ID:",
                    data.orderId
                );
            } else {
                console.error("Failed to place order:", response.statusText);
            }
        } catch (error) {
            console.error("Error placing order:", error);
        }
    };

    return (
        <div className={styles.checkout}>
            <form onSubmit={(e) => onSubmit(e)} className={styles.form}>
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
                <button>Place Order</button>
            </form>
        </div>
    );
}
