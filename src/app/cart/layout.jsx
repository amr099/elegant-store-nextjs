import styles from "./Cart.module.css";

export default function Layout({ children }) {
    return (
        <div className='container'>
            <div className={styles.cart}>
                <h3 className={styles.h3}>Cart</h3>
                <div className={styles.steps}>
                    <h6 className={styles.h6}>Shopping cart</h6>
                    <h6 className={styles.h6}>Checkout details</h6>
                    <h6 className={styles.h6}>Order complete</h6>
                </div>
                {children}
            </div>
        </div>
    );
}
