import styles from "./WishlistItem.module.css";
import Image from "next/image";

export default function WishlistItem({ item }) {
    return (
        <tr className={styles.wishlistItem}>
            <td>
                {" "}
                <div className='flex'>
                    <Image
                        src='/icons/close.svg'
                        alt='close'
                        width={24}
                        height={24}
                    />
                    <Image
                        src='imgs/p-color.png'
                        alt='cartItem-img'
                        width={80}
                        height={80}
                    />
                    <div className={styles.col}>
                        <span>{item.name}</span>
                    </div>
                </div>
            </td>
            <td>${item.price}</td>
            <td>
                <button>Add to cart</button>
            </td>
        </tr>
    );
}
