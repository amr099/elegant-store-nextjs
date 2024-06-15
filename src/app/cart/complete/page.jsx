import Link from "next/link";
import styles from "../Cart.module.scss";
import { fetchLastOrder } from "@/app/lib/data";
import { Suspense } from "react";

export default async function Page() {
    const { order_id, order_date, amount } = await fetchLastOrder();
    return (
        <Suspense fallback='Loading...'>
            <div className={styles.complete}>
                <h6 className={styles.h6}>Thank you! 🎉</h6>
                <h4 className={styles.h4}>Your order has been received</h4>

                <div className={styles.info}>
                    <div className='flexBetween'>
                        <span>Order code:</span>
                        <span>{order_id}</span>
                    </div>
                    <div className='flexBetween'>
                        <span>Date:</span>
                        <span>{order_date.toLocaleDateString()}</span>
                    </div>
                    <div className='flexBetween'>
                        <span>Total:</span>
                        <span>${amount}</span>
                    </div>
                    <div className='flexBetween'>
                        <span>Payment method:</span>
                        <span>Credit Card</span>
                    </div>
                </div>
                <Link href='/profile/orders' className='button'>
                    Purchase History
                </Link>
            </div>
        </Suspense>
    );
}
