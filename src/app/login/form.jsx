"use client";
import Link from "next/link";
import styles from "./Login.module.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Form() {
    const [error, setError] = useState("");
    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await signIn("credentials", {
            username: e.target[0].value,
            password: e.target[1].value,
            redirect: false,
        });
        if (!response?.error) {
            router.push("/profile");
            router.refresh();
        } else {
            setError(response?.error);
        }
    };
    return (
        <form className={styles.form} onSubmit={(e) => onSubmit(e)}>
            <h4>Sign In</h4>
            <p className='flex body2'>
                Don’t have an accout yet?{" "}
                <Link href='/login/signup' className={styles.a}>
                    Sign Up
                </Link>
            </p>
            <div>
                <input type='username' name='username' placeholder='username' />
            </div>
            <div>
                <input type='password' placeholder='Password' />
            </div>

            <div className='flexBetween'>
                <div>
                    <input
                        type='checkbox'
                        id='remember'
                        className={styles.checkbox}
                    />
                    <label htmlFor='remember'>Remember Me</label>
                </div>
                <a href='#'>Forget password?</a>
            </div>
            {error && <p className='error'>{error}</p>}
            <button>Sign In</button>
        </form>
    );
}
