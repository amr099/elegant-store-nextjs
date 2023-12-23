import styles from "./Skeletons.module.css";

export default function ProductCardSkeleton() {
    return (
        <div className={styles.cardSkeleton}>
            <div className={styles.card}>
                <div>
                    <div className={styles.offer}></div>
                    <div className={styles.new}></div>
                </div>
                <div className={styles.btn}></div>
            </div>
            <div className={styles.info}>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
