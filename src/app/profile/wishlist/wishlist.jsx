"use client";

import WishlistItem from "@/app/ui/WishlistItem/WishlistItem";

export default function Wishlist({ wishlist }) {
    return (
        <>
            {wishlist?.map((item) => (
                <WishlistItem item={item} key={item?.product_id} />
            ))}
        </>
    );
}
