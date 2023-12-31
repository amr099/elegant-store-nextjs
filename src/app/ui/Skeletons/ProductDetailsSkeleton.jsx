import styles from "./Skeletons.module.scss";

export default function ProductDetailsSkeleton() {
    return (
        <div className={styles.productDetailsSkeleton}>
            <div className={styles.img}></div>
            <div className={styles.info}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
