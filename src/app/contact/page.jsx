import styles from "./Contact.module.css";
import Link from "next/link";
import Image from "next/image";
import Cards from "../ui/Cards/Cards";

export default function Page() {
    return (
        <div className='container'>
            <div className={styles.contact}>
                <div className={styles.intro}>
                    <h3 className={styles.h3}>
                        We believe in sustainable decor. We’re passionate about
                        life at home.
                    </h3>
                    <p className={styles.p}>
                        Our features timeless furniture, with natural fabrics,
                        curved lines, plenty of mirrors and classic design,
                        which can be incorporated into any decor project. The
                        pieces enchant for their sobriety, to last for
                        generations, faithful to the shapes of each period, with
                        a touch of the present
                    </p>
                </div>
                <div className={styles.aboutGrid}>
                    <img src='/imgs/sale.png' alt='about' />
                    <div className={styles.aboutContent}>
                        <h4>About Us</h4>
                        <p>
                            3legant is a gift & decorations store based in HCMC,
                            Vietnam. Est since 2019. Our customer service is
                            always prepared to support you 24/7
                        </p>
                        <Link href='/shop'>
                            {" "}
                            Shop now{" "}
                            <img src='/icons/arrow-right.svg' alt='arrow' />
                        </Link>
                    </div>
                </div>
                <h4>Contact Us</h4>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <Image
                            src='/icons/email.svg'
                            alt='email'
                            width={50}
                            height={50}
                        />
                        <h6>Address</h6>
                        <span>234 Hai Trieu, Ho Chi Minh City, Viet Nam</span>
                    </div>
                    <div className={styles.card}>
                        <Image
                            src='/icons/phone.svg'
                            alt='phone'
                            width={50}
                            height={50}
                        />
                        <h6>Contact Us</h6>
                        <span>+84 234 567 890</span>
                    </div>
                    <div className={styles.card}>
                        <Image
                            src='/icons/home.svg'
                            alt='home'
                            width={50}
                            height={50}
                        />
                        <h6>Email</h6>
                        <span>hello@3legant.com</span>
                    </div>
                </div>

                <form className={styles.form}>
                    <div className={styles.input}>
                        <label htmlFor='name'>Full Name</label>
                        <input
                            type='text'
                            placeholder='Your Name'
                            id='name'
                            name='name'
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.input}>
                        <label htmlFor='email'>Email address</label>
                        <input
                            type='email'
                            placeholder='Your Email'
                            id='email'
                            name='email'
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.input}>
                        <label htmlFor='message'>Message</label>
                        <textarea
                            name='message'
                            id='message'
                            cols='30'
                            rows='10'
                            className={styles.textarea}
                        ></textarea>
                    </div>
                    <button>Send Message</button>
                </form>
            </div>
            <Cards />
        </div>
    );
}
