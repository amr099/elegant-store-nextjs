import styles from "./Banner.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image
                src='/icons/percent.svg'
                alt='percent'
                className={styles.percent}
                width={24}
                height={24}
            />
            <p>30% off storewide — Limited time! </p>

            <Link href='/shop' className={styles.link}>
                shop now{" "}
                <Image
                    src='/icons/arrow-right-blue.svg'
                    alt='arrow-tight'
                    className={styles.arrow}
                    width={24}
                    height={24}
                />
            </Link>

            {/* <img src={close} alt='close' className={styles.close} /> */}
        </div>
    );
}
