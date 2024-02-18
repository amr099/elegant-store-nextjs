"use client";

import { useRouter } from "next/navigation";
import styles from "../Cart.module.scss";
import { useContext, useState } from "react";
import { CartContext } from "./../../../context/CartContext";
import Loading from "@/app/ui/Loading/Loading";
import { useForm } from "react-hook-form";
import { addNewOrder } from "./../../lib/actions";

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { total, clearCart } = useContext(CartContext);
    const { replace } = useRouter();

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            if (total <= 0) {
                setError("The order has not items!");
                return;
            }
            const action = await addNewOrder({ ...data, amount: total });
            if (action?.success) {
                clearCart();
                replace("/cart/complete");
            } else if (action?.error) {
                setError(action.error);
            }
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <fieldset className={styles.fieldset}>
                <legend>Contact Information</legend>
                <div className={styles.inputDiv}>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        id='name'
                        {...register("name", {
                            required: true,
                            pattern: /[A-Za-z ]+/,
                        })}
                    />
                    {errors.name && (
                        <span className={styles.error}>
                            Name is required and must contain only letters.
                        </span>
                    )}
                </div>
                <div className={styles.inputDiv}>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type='email'
                        id='email'
                        {...register("email", { required: true })}
                    />
                    {errors.email && (
                        <span className={styles.error}>Email is required.</span>
                    )}
                </div>
                <div className={styles.inputDiv}>
                    <label htmlFor='phone'>Phone:</label>
                    <input
                        type='tel'
                        id='phone'
                        {...register("phone", { required: true })}
                    />
                    {errors.phone && (
                        <span className={styles.error}>
                            {error.phone.message}
                        </span>
                    )}
                </div>
            </fieldset>

            <fieldset className={styles.fieldset}>
                <legend>Shipping Information</legend>
                <div className={styles.inputDiv}>
                    <label htmlFor='address'>Address:</label>
                    <input
                        id='address'
                        {...register("address", {
                            required: "Address is required",
                        })}
                    />
                    {errors.address && (
                        <span className={styles.error}>
                            {errors.address.message}
                        </span>
                    )}
                </div>
                <div className={styles.inputDiv}>
                    <label htmlFor='city'>City:</label>
                    <input
                        type='text'
                        id='city'
                        {...register("city", {
                            required: "City is required",
                        })}
                    />
                    {errors.city && (
                        <span className={styles.error}>
                            {errors.city.message}
                        </span>
                    )}
                </div>
                <div className={styles.inputDiv}>
                    <label htmlFor='zip'>ZIP Code:</label>
                    <input
                        type='text'
                        id='zip'
                        {...register("zip", {
                            required: "ZIP Code is required",
                        })}
                    />
                    {errors.zip && (
                        <span className={styles.error}>
                            {errors.zip.message}
                        </span>
                    )}
                </div>
            </fieldset>

            {/* <fieldset className={styles.fieldset}>
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
                </fieldset> */}
            {error && <p className={styles.error}>{error}</p>}
            <button disabled={loading}>
                {loading ? <Loading /> : "Place Order"}
            </button>
        </form>
    );
}
