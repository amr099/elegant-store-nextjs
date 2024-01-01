import Image from "next/image";
import styles from "./Cards.module.scss";

export default function Cards() {
    return (
        <div className={styles.cards}>
            <div className={styles.card}>
                <Image
                    src='/icons/delivery.svg'
                    alt='delivery'
                    width={50}
                    height={50}
                />
                <h6 className='h7'>Free Shipping</h6>
                <span>Order above $200</span>
            </div>
            <div className={styles.card}>
                <Image
                    src='/icons/money.svg'
                    alt='money'
                    width={50}
                    height={50}
                />
                <h6 className='h7'>Money-back</h6>
                <span>30 days guarantee</span>
            </div>
            <div className={styles.card}>
                <Image
                    src='/icons/lock.svg'
                    alt='lock'
                    width={50}
                    height={50}
                />
                <h6 className='h7'>Secure Payments</h6>
                <span>Secured by Stripe</span>
            </div>
            <div className={styles.card}>
                <Image
                    src='/icons/phone.svg'
                    alt='phone'
                    width={50}
                    height={50}
                />
                <h6 className='h7'>24/7 Support</h6>
                <span>Phone and Email support</span>
            </div>
        </div>
    );
}
