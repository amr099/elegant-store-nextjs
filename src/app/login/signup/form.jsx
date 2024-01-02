"use client";

import Link from "next/link";
import styles from "../Login.module.scss";
import { initialFormState, formReducer } from "../reducer";
import { useReducer } from "react";
import Loading from "@/app/ui/Loading/Loading";
import { useForm } from "react-hook-form";

export default function Form() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();
    const [state, dispatch] = useReducer(formReducer, initialFormState);

    const onSubmit = async (data) => {
        try {
            dispatch({ type: "LOADING" });
            const response = await fetch("/api/auth/register", {
                method: "POST",
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    dispatch({ type: "SUCCESS" });
                    reset();
                } else {
                    dispatch({ type: "ERROR", payload: data.error });
                }
            } else {
                const data = await response.json();
                if (response.status === 400) {
                    // Handle specific error messages for 400 Bad Request
                    dispatch({ type: "ERROR", payload: data.error });
                } else {
                    // Handle other server errors
                    dispatch({ type: "ERROR", payload: "Server error" });
                }
            }
        } catch (e) {
            dispatch({ type: "ERROR", payload: "Something went wrong!" });
            console.log(e);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h4>Sign Up</h4>
            <p className='flex body2'>
                Already have an account?{" "}
                <Link href='/login' className={styles.a}>
                    Sign In
                </Link>
            </p>
            <div>
                <input
                    {...register("name")}
                    type='text'
                    placeholder='Your name'
                />
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                <input
                    {...register("username", { required: true })}
                    type='text'
                    placeholder='Username'
                />
                {errors.username && <p>{errors.username.message}</p>}
            </div>
            <div>
                <input
                    {...register("email", { required: true })}
                    type='email'
                    placeholder='Email address'
                />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <input
                    {...register("password", { required: true })}
                    type='password'
                    placeholder='Password'
                />
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div>
                <input
                    {...register("repeatpassword", {
                        required: "Repeat Password is required",
                        validate: (value) =>
                            value === watch("password") ||
                            "Passwords do not match",
                    })}
                    type='password'
                    placeholder='Repeat password'
                />
                {errors.repeatpassword && (
                    <p>{errors.repeatpassword.message}</p>
                )}
            </div>
            <div className={styles.flex}>
                <input
                    type='checkbox'
                    id='agree'
                    className={styles.checkbox}
                    {...register("agree", { required: true })}
                />
                <label htmlFor='agree' className='body2'>
                    I agree with{" "}
                    <span className={styles.bold}> Privacy Policy</span> and{" "}
                    <span className={styles.bold}>Terms of Use </span>
                </label>
            </div>
            {state.error && <p className={styles.error}>{state.error}</p>}
            {state.success && (
                <p className={styles.success}>
                    You have been registered successfully.
                </p>
            )}
            <button disabled={state.loading}>
                {state.loading ? <Loading /> : "Sign Up"}
            </button>
        </form>
    );
}
