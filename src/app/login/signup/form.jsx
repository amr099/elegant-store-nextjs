"use client";

import Link from "next/link";
import styles from "../Login.module.css";
import { initialFormState, formReducer } from "../reducer";
import { useReducer } from "react";


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
            dispatch({ type: "SUCCESS" });
        } catch (e) {
            dispatch({ type: "ERROR", payload: "something went wrong!" });
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
                <input name='username' placeholder='Username' required/>
            </div>
            <div>
                <input name='email' type='email' placeholder='Email address' required/>
            </div>
            <div>
                <input type='password' placeholder='Password' required/>
            </div>
            <div>
                <input type='checkbox' id='agree' className={styles.checkbox} />
                <label htmlFor='agree' className='body2'>
                    I agree with <span> Privacy Policy</span> and{" "}
                    <span>Terms of Use </span>
                </label>
            </div>
            {state.error && <p className='error'>{state.error}</p>}
            {state.loading && <p>Signing up...</p>}
            {state.success && <p className="success">You have been registered successfully.</p>}
            <button>Sign Up</button>
        </form>
    );
}
