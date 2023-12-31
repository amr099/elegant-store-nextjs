"use client";

import { usePathname } from "next/navigation";
import styles from "./Cart.module.css";
import { useState, useEffect } from "react";

export default function Layout({ children }) {
    const [step, setStep] = useState();
    const pathname = usePathname();

    useEffect(() => {
        switch (pathname) {
            case "/cart":
                setStep(1);
                break;
            case "/cart/checkout":
                setStep(2);
                break;
            case "/cart/complete":
                setStep(3);
                break;
            default:
                break;
        }
    }, [pathname]);
    return (
        <div className='container'>
            <div className={styles.cart}>
                <h3 className={styles.h3}>Cart</h3>
                <div className={styles.steps}>
                    <h6
                        className={
                            step === 1 ? styles.selected : styles.completed
                        }
                    >
                        Shopping cart
                    </h6>
                    <h6
                        className={
                            step > 2
                                ? styles.completed
                                : step === 2
                                ? styles.selected
                                : {}
                        }
                    >
                        Checkout details
                    </h6>
                    <h6 className={step === 3 ? styles.completed : {}}>
                        Order complete
                    </h6>
                </div>
                {children}
            </div>
        </div>
    );
}
