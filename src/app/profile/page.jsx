"use client";

import { useForm } from "react-hook-form";
import styles from "./Profile.module.scss";
import { useReducer } from "react";
import Loading from "../ui/Loading/Loading";
import { updateUserInfo } from "../lib/actions";

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
            const action = await updateUserInfo(data);
            if (action?.success) {
                dispatch({ type: "SUCCESS" });
                reset();
            } else {
                dispatch({
                    type: "ERROR",
                    payload: "Failed to update user information",
                });
                console.log(action.error);
            }
        } catch (error) {
            console.log(error);
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
                        {...register("name")}
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
                        {...register("username")}
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
                        {...register("email")}
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
                        {...register("newpassword")}
                    />
                    {errors.newpassword && <p>{errors.newpassword.message}</p>}
                </div>
                {/* <div>
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
                </div> */}
                {state?.error && <p className='error'>{state.error}</p>}
                {state?.success && (
                    <p className='success'>
                        Your information have been updated successfully!
                    </p>
                )}
                <button type='submit' disabled={state?.loading}>
                    {state?.loading ? <Loading /> : "Save changes"}
                </button>
            </fieldset>
        </form>
    );
}
