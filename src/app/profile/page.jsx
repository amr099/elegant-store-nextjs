"use client";

import { useForm } from "react-hook-form";
import styles from "./Profile.module.scss";
import { useReducer } from "react";
import Loading from "../ui/Loading/Loading";

const reducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return { loading: true, success: false, error: "" };
        case "ERROR":
            return { loading: false, success: false, error: action.payload };
        case "SUCCESS":
            return { loading: false, success: true, error: "" };
    }
};

const initialState = { loading: false, success: false, error: "" };

export default function Page() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const [state, dispatch] = useReducer(reducer, initialState);

    const onSubmit = async (data) => {
        try {
            dispatch({ type: "LOADING" });
            const response = await fetch("/api/userinfo/update", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // Handle successful update
                dispatch({ type: "SUCCESS" });
                console.log("User information updated successfully");
                reset();
            } else {
                dispatch({
                    type: "ERROR",
                    payload: "Failed to update user information",
                });
                // Handle error
                console.error("Failed to update user information");
            }
        } catch (error) {
            console.error("Error updating user information:", error);
            dispatch({
                type: "ERROR",
                payload: "Error updating user information",
            });
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <legend>Account Details</legend>

                <div>
                    <label htmlFor='name'>Full name:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        {...register("name", {
                            required: "Full name is required",
                        })}
                        placeholder='Full name'
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor='username'>User name:</label>
                    <input
                        type='text'
                        id='username'
                        name='username'
                        {...register("username", {
                            required: "Username name is required",
                        })}
                        placeholder='Username'
                    />
                    {errors.dname && <p>{errors.dname.message}</p>}
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Invalid email address",
                            },
                        })}
                        placeholder='Email'
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
            </fieldset>

            <fieldset>
                <legend>Password</legend>
                {/* <div>
                    <label htmlFor='oldpassword'>Old Password:</label>
                    <input
                        type='password'
                        id='oldpassword'
                        name='oldpassword'
                        {...register("oldpassword", {
                            required: "Old Password is required",
                        })}
                    />
                    {errors.oldpassword && <p>{errors.oldpassword.message}</p>}
                </div> */}
                <div>
                    <label htmlFor='newpassword'>New Password:</label>
                    <input
                        type='password'
                        id='newpassword'
                        name='newpassword'
                        {...register("newpassword", {
                            required: "New Password is required",
                        })}
                    />
                    {errors.newpassword && <p>{errors.newpassword.message}</p>}
                </div>
                <div>
                    <label htmlFor='repeatpassword'>Repeat Password:</label>
                    <input
                        type='password'
                        id='repeatpassword'
                        name='repeatpassword'
                        {...register("repeatpassword", {
                            required: "Repeat Password is required",
                            validate: (value) =>
                                value === watch("newpassword") ||
                                "Passwords do not match",
                        })}
                    />
                    {errors.repeatpassword && (
                        <p>{errors.repeatpassword.message}</p>
                    )}
                </div>
                {state?.error && <p className='error'>{state.error}</p>}
                {state?.success && (
                    <p className='success'>
                        Your information have been updated successfully!
                    </p>
                )}
                <button type='submit' disables={state?.loading}>
                    {state?.loading ? <Loading /> : "Save changes"}
                </button>
            </fieldset>
        </form>
    );
}
