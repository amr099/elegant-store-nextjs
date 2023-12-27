import styles from "../Profile.module.css";
export default function Page() {
   
    return (
        <table className={styles.wishlist}>
            <thead className={styles.thead}>
                <tr className={styles.tr}>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Add to cart</td>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    );
}
