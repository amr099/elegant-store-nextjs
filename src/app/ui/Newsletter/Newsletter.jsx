import styles from "./Newsletter.module.scss";

export default function Newsletter() {
    return (
        <div className={styles.newsletter}>
            <h4>Join Our Newsletter</h4>
            <p>Sign up for deals, new products and promotions</p>
            <div className={styles.input}>
                <input type='email' name='email' placeholder='Email Address' />{" "}
                <button className={styles.button}>Signup</button>
            </div>
        </div>
    );
}
