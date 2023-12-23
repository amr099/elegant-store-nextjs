import styles from "./Loading.module.css";

export default function Loading() {
    return (
        <div className={styles.loading}>
            <span className={styles.span}></span>
            <span className={styles.span}></span>
            <span className={styles.span}></span>
        </div>
    );
}
