"use client";

import WishlistItem from "./../../ui/WishlistItem/WishlistItem";
import { useState } from "react";

export default function Wishlist({ wishlist }) {
    const [wishlistState, setWishlist] = useState(wishlist);

    const onDelete = async (product_id) => {
        try {
            const response = await fetch("/api/wishlist/remove", {
                method: "DELETE",
                body: JSON.stringify({
                    product_id: product_id,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setWishlist(data.wishlist);
            } else {
                console.error("Failed to remove from wishlist");
            }
        } catch (error) {
            console.error("Error removing from wishlist", error);
        }
    };

    return (
        <>
            {wishlistState?.map((item) => (
                <WishlistItem
                    item={item}
                    key={item?.product_id}
                    onDelete={onDelete}
                />
            ))}
        </>
    );
}
