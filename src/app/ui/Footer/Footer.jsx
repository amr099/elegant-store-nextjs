import Link from "next/link";
import styles from "./Footer.module.scss";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className='container'>
                <div className={styles.row}>
                    <div>
                        <h6>3legant.</h6>
                        <p>Gift & Decoration Store</p>
                    </div>
                    <div>
                        <Link href='/' className='animated'>
                            Home
                        </Link>
                        <Link href='/shop' className='animated'>
                            Shop
                        </Link>
                        <Link href='/blog' className='animated'>
                            Blog
                        </Link>
                        <Link href='/contact' className='animated'>
                            Contact Us
                        </Link>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.copy}>
                        <p>Copyright © 2023 3legant. All rights reserved</p>
                        <div className={styles.flex}>
                            <span href='#'>Privacy Policy</span>
                            <span href='#'>Terms of Use</span>
                        </div>
                    </div>

                    <div className={styles.socials}>
                        <Image
                            src='/icons/instagram.svg'
                            alt='instagram'
                            width={30}
                            height={30}
                        />
                        <Image
                            src='/icons/youtube.svg'
                            alt='youtube'
                            width={30}
                            height={30}
                        />
                        <Image
                            src='/icons/facebook.svg'
                            alt='facebook'
                            width={30}
                            height={30}
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}
