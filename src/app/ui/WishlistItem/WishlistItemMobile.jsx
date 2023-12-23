import styles from "./WishlistItem.module.css";

export default function WishlistItemMobile({ item }) {
    return (
        <tr className={styles.wishlistItemMobile}>
            <td>
                {" "}
                <div className='flex'>
                    <img src='/icons/close.svg' alt='close' />
                    <img
                        src='/imgs/p-color.png'
                        alt='cartItem-img'
                        width={"80"}
                        height={"80"}
                    />
                    <div className={styles.col}>
                        <span>{item.name}</span>
                        <span>${item.price}</span>
                    </div>
                </div>
            </td>
            <td>
                <button>Add to cart</button>
            </td>
        </tr>
    );
}
