import Link from "next/link";
import styles from "./Login.module.css";

export default function Layout({ children }) {
    return (
        <section className={styles.formGrid}>
            {/* <div className={styles.img}>
                <Link href='/' className={styles.mainHead}>
                    3legant<span>.</span>
                </Link>
            </div> */}
            {children}
        </section>
    );
}
