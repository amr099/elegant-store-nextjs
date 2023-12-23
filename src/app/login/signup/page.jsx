"use client";

import { useEffect, useReducer, useState } from "react";
import styles from "../Login.module.css";
import { useForm } from "react-hook-form";
import { formReducer, initialFormState } from "../reducer";
import Link from "next/link";
import Loading from "@/app/ui/Loading/Loading";
export default function SignUp() {
    const [users, setUsers] = useState([]);
    const [formState, dispatch] = useReducer(formReducer, initialFormState);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        const getUsers = async () => {
            const response = await fetch(
                "https://657600c70febac18d4038f91.mockapi.io/api/orders"
            );
            const data = await response.json();
            setUsers(data);
        };
        getUsers();
    }, []);

    const onSubmit = (data) => {
        dispatch({ type: "LOADING" });
        if (users.find((user) => user.name == data.name)) {
            dispatch({ type: "ERROR", payload: "Name Already exists" });
            return;
        }
        if (users.find((user) => user.username == data.username)) {
            dispatch({ type: "ERROR", payload: "Username Already exists" });
            return;
        }
        if (users.find((user) => user.email == data.email)) {
            dispatch({ type: "ERROR", payload: "Email Already exists" });
            return;
        }
        const userData = {
            name: data.name,
            username: data.username,
            email: data.email,
            password: data.password,
            whishlist: [],
            orders: [],
        };

        fetch("https://657600c70febac18d4038f91.mockapi.io/api/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        }).then((response) => {
            if (!response.ok) {
                dispatch({
                    type: "ERROR",
                    payload: "Unexpected error occured!",
                });
                console.log(response);
            } else {
                dispatch({ type: "SUCCESS" });
                reset();
            }
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <h4>Sign Up</h4>
            <p className='flex body2'>
                Already have an account? <Link href='/login' className={styles.a}>Sign In</Link>
            </p>
            <div>
                <input
                    type='name'
                    name='name'
                    placeholder='Your name'
                    {...register("name", { required: true })}
                />
                {errors.name && (
                    <span className={styles.error}>This field is required</span>
                )}
            </div>
            <div>
                <input
                    name='username'
                    placeholder='Username'
                    {...register("username", { required: true })}
                />
                {errors.username && (
                    <span className={styles.error}>This field is required</span>
                )}
            </div>
            <div>
                <input
                    name='email'
                    type='email'
                    placeholder='Email address'
                    {...register("email", { required: true })}
                />
                {errors.email && (
                    <span className={styles.error}>This field is required</span>
                )}
            </div>
            <div>
                <input
                    type='password'
                    placeholder='Password'
                    {...register("password", { required: true })}
                />
                {errors.password && (
                    <span className={styles.error}>This field is required</span>
                )}
            </div>
            <div>
                <input type='checkbox' id='agree' className={styles.checkbox} />
                <label htmlFor='agree' className='body2'>
                    I agree with <span> Privacy Policy</span> and{" "}
                    <span>Terms of Use </span>
                </label>
            </div>
            {formState?.error && (
                <p className={styles.error}>{formState?.error}</p>
            )}
            {formState?.success && (
                <p className={styles.success}>
                    Your account has been registered successfully.
                </p>
            )}
            <button>{formState?.loading ? <Loading /> : "Sign Up"}</button>
        </form>
    );
}
