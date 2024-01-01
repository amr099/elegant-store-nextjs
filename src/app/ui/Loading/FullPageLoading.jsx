import styles from "./Loading.module.scss";

export default function FullPageLoading() {
    return (
        <div className={styles.fullPageLoading}>
            <span className={styles.loader}></span>
        </div>
    );
}
