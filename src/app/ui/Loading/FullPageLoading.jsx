import styles from "./Loading.module.css";

export default function FullPageLoading() {
    return (
        <div className={styles.fullPageLoading}>
            <span className={styles.loader}></span>
        </div>
    );
}
