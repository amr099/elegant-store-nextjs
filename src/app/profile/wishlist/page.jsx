import styles from "../Profile.module.css";
import { fetchWhishlist } from "@/app/lib/data";
import WishlistItem from "./../../ui/WishlistItem/WishlistItem";
import { getServerSession } from "next-auth";
export default async function Page() {
    const session = await getServerSession();
    const wishlistItems = await fetchWhishlist(session.user.email);

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
                {wishlistItems?.map((item) => (
                    <WishlistItem item={item} key={item.product_id} />
                ))}
            </tbody>
        </table>
    );
}
