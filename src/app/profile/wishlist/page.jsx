import styles from "../Profile.module.scss";
import { fetchWhishlist } from "@/app/lib/data";
import Wishlist from "./wishlist";
import { Suspense } from "react";
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
                <Suspense fallback='Loading...'>
                    <Wishlist wishlist={wishlist} />
                </Suspense>
            </tbody>
        </table>
    );
}
