"use client";

import styles from "../Profile.module.css";
import { useMediaQuery } from "react-responsive";
import { useContext } from "react";
import WishlistItem from "@/app/ui/WishlistItem/WishlistItem";
import WishlistItemMobile from "@/app/ui/WishlistItem/WishlistItemMobile";
import { AuthContext } from "@/context/AuthContext";

export default function Page() {
    const { user } = useContext(AuthContext);
    const isMobile = useMediaQuery({ maxWidth: 769 });
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
                {user?.wishlist?.map((item) =>
                    isMobile ? (
                        <WishlistItemMobile item={item} key={item?.id} />
                    ) : (
                        <WishlistItem item={item} key={item?.id} />
                    )
                )}
            </tbody>
        </table>
    );
}
