import styles from "../Profile.module.css";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <div className={styles.address}>
                <div className={styles.card}>
                    <div className='flexBetween'>
                        <h6 className='h7'>Billing Address</h6>
                        <div className='flex'>
                            <Image
                                src='/icons/pencil.svg'
                                alt='pencil'
                                width={30}
                                height={30}
                            />
                            <span>EDIT</span>
                        </div>
                    </div>
                    <p>Sofia Havertz</p>
                    <p>(+1) 234 567 890</p>
                    <p>345 Long Island, NewYork, United States</p>
                </div>
                <div className={styles.card}>
                    <div className='flexBetween'>
                        <h6 className='h7'>Shipping Address</h6>
                        <div className='flex'>
                            <Image
                                src='/icons/pencil.svg'
                                alt='pencil'
                                width={30}
                                height={30}
                            />
                            <span>EDIT</span>
                        </div>
                    </div>
                    <p>Sofia Havertz</p>
                    <p>(+1) 234 567 890</p>
                    <p>345 Long Island, NewYork, United States</p>
                </div>
            </div>
        </>
    );
}
