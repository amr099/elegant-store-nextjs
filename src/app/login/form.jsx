"use client";
import Link from "next/link";
import styles from "./Login.module.scss";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useReducer } from "react";
import { initialFormState, formReducer } from "./reducer";
import Loading from "../ui/Loading/Loading";

export default function Form() {
    const [state, dispatch] = useReducer(formReducer, initialFormState);
    const router = useRouter();

    const onSubmit = async (e) => {
        dispatch({ type: "LOADING" });
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
            dispatch({ type: "ERROR", payload: "Wrong username or password!" });
            console.log(response?.error);
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
                <input
                    type='username'
                    name='username'
                    placeholder='username'
                    required
                />
            </div>
            <div>
                <input type='password' placeholder='Password' required />
            </div>

            <div>
                {/* <div>
                    <input
                        type='checkbox'
                        id='remember'
                        className={styles.checkbox}
                    />
                    <label htmlFor='remember'>Remember Me</label>
                </div>
                <a href='#'>Forget password?</a> */}
                {state.error && <p className={styles.error}>{state.error}</p>}
            </div>
            <button disabled={state.loading}>
                {state.loading ? <Loading /> : "Sign In"}
            </button>
        </form>
    );
}
