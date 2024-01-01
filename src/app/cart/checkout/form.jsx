"use client";

import { useRouter } from "next/navigation";
import styles from "../Cart.module.scss";
import { useContext, useReducer } from "react";
import { CartContext } from "./../../../context/CartContext";
import Loading from "@/app/ui/Loading/Loading";
import { useForm } from "react-hook-form";

const reducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return { success: false, loading: true, error: "" };
        case "SUCCESS":
            return { success: true, loading: false, error: "" };
        case "ERROR":
            return { success: false, loading: false, error: action.payload };
    }
};

export default function Form() {
    const [state, dispatch] = useReducer(reducer, {
        success: false,
        loading: false,
        error: "",
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { total } = useContext(CartContext);
    const { replace } = useRouter();

    console.log(errors.name);

    const onSubmit = async (data) => {
        try {
            dispatch({ type: "LOADING" });
            const response = await fetch("/api/neworder", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...data, amount: total }),
            });
            if (total <= 0) {
                dispatch({
                    type: "ERROR",
                    payload: "The order has not items!",
                });
                return;
            }

            if (response.ok) {
                const data = await response.json();
                replace("/cart/complete");
                console.log(
                    "Order placed successfully. Order ID:",
                    data.orderId
                );
                dispatch({ type: "SUCCESS" });
            } else {
                if (response.status === 400)
                    dispatch({ type: "ERROR", payload: response.statusText });
                else {
                    dispatch({ type: "ERROR", payload: response.statusText });
                    console.log("Failed to place order:", response.statusText);
                }
            }
        } catch (error) {
            dispatch({ type: "ERROR", payload: "something went wrong" });
            console.log("Error placing order:", error);
        }
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
                        {...register("phone", { pattern: /01[0-9]{9}/ })}
                    />
                    {errors.phone && (
                        <span className={styles.error}>
                            Invalid phone number format. It should start with 01
                            and have 11 digits.
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
            {state.error && <p className={styles.error}>{state.error}</p>}
            {state.success && (
                <p className={styles.success}>
                    Order has been placed successfully.
                </p>
            )}
            <button disabled={state.loading}>
                {state.loading ? <Loading /> : "Place Order"}
            </button>
        </form>
    );
}
