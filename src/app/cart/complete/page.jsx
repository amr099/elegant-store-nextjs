import Link from "next/link";
import styles from "../Cart.module.css";
import Image from "next/image";
export default function Page() {
    return (
        <div className={styles.complete}>
            <h6 className={styles.h6}>Thank you! 🎉</h6>
            <h4 className={styles.h4}>Your order has been received</h4>

            <div className={`flex ${styles.products}`}>
                <Image src='/imgs/p-color.png' alt='p' width={24} height={24} />
                <Image src='/imgs/p-color.png' alt='p' width={24} height={24} />
                <Image src='/imgs/p-color.png' alt='p' width={24} height={24} />
            </div>

            <div className={styles.info}>
                <div className='flexBetween'>
                    <span>Order code:</span>
                    <span>#0123_45678</span>
                </div>
                <div className='flexBetween'>
                    <span>Date:</span>
                    <span>October 19, 2023</span>
                </div>
                <div className='flexBetween'>
                    <span>Total:</span>
                    <span>$1,345.00</span>
                </div>
                <div className='flexBetween'>
                    <span>Payment method:</span>
                    <span>Credit Card</span>
                </div>
            </div>
            <Link href='/profile/orders'>Purchase History</Link>
        </div>
    );
}
