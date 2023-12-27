"use client";

import Link from "next/link";
import styles from "../Login.module.css";

export default function Form() {
    const onSubmit = async (e) => {
        try {
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
        } catch (e) {
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
                <input name='username' placeholder='Username' />
            </div>
            <div>
                <input name='email' type='email' placeholder='Email address' />
            </div>
            <div>
                <input type='password' placeholder='Password' />
            </div>
            <div>
                <input type='checkbox' id='agree' className={styles.checkbox} />
                <label htmlFor='agree' className='body2'>
                    I agree with <span> Privacy Policy</span> and{" "}
                    <span>Terms of Use </span>
                </label>
            </div>

            <button>Sign Up</button>
        </form>
    );
}
