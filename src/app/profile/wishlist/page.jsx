import styles from "../Profile.module.scss";
import { fetchWhishlist } from "@/app/lib/data";
import Wishlist from "./wishlist";
export default async function Page() {
    const wishlist = await fetchWhishlist();

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
                <Wishlist wishlist={wishlist} />
            </tbody>
        </table>
    );
}
