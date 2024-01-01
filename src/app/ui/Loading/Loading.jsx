import styles from "./Loading.module.scss";

export default function Loading() {
    return (
        <div className={styles.loading}>
            <span className={styles.span}></span>
            <span className={styles.span}></span>
            <span className={styles.span}></span>
        </div>
    );
}
