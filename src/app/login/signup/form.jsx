"use client";

import Link from "next/link";
import styles from "../Login.module.css";
import { initialFormState, formReducer } from "../reducer";
import { useReducer } from "react";
import Loading from "@/app/ui/Loading/Loading";

export default function Form() {
    const [state, dispatch] = useReducer(formReducer, initialFormState);

    const onSubmit = async (e) => {
        try {
            dispatch({ type: "LOADING" });
            e.preventDefault();
            const response = await fetch("/api/auth/register", {
                method: "POST",
                body: JSON.stringify({
                    name: e.target[0].value,
                    username: e.target[1].value,
                    email: e.target[2].value,
                    password: e.target[3].value,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    dispatch({ type: "SUCCESS" });
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
        <form className={styles.form} onSubmit={(e) => onSubmit(e)}>
            <h4>Sign Up</h4>
            <p className='flex body2'>
                Already have an account?{" "}
                <Link href='/login' className={styles.a}>
                    Sign In
                </Link>
            </p>
            <div>
                <input type='name' name='name' placeholder='Your name' />
            </div>
            <div>
                <input name='username' placeholder='Username' required />
            </div>
            <div>
                <input
                    name='email'
                    type='email'
                    placeholder='Email address'
                    required
                />
            </div>
            <div>
                <input type='password' placeholder='Password' required />
            </div>
            <div className={styles.flex}>
                <input
                    type='checkbox'
                    id='agree'
                    className={styles.checkbox}
                    required
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
            <button disables={state.loading}>
                {state.loading ? <Loading /> : "Sign Up"}
            </button>
        </form>
    );
}
