"use client";

import styles from "./ProductCard.module.css";
import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import { CartContext } from "@/context/CartContext";

export default function ProductCard({ item, wishlist }) {
    const { cart, AddToCart } = useContext(CartContext);
    const productImg = {
        backgroundImage: `url(${item?.img_url})`,
    };

    // const addToWishlist = (product_id) => {
    //     const response = fetch("/api/wishlist/add", {
    //         method: "POST",
    //         body: JSON.stringify({
    //             product_id: product_id,
    //         }),
    //     });
    // };
    // const removeFromWishlist = (product_id) => {
    //     const response = fetch("/api/wishlist/remove", {
    //         method: "DELETE",
    //         body: JSON.stringify({
    //             product_id: product_id,
    //         }),
    //     });
    // };

    return (
        <div className={styles.product}>
            <Link href={`/product/${item?.product_id}`}>
                <div className={styles.card} style={productImg}>
                    <div className={styles.col}>
                        {/* <div className={styles.new}>new</div> */}
                        {/* <div className={styles.offer}>-50%</div> */}
                    </div>
                    {/* {wishlist?.find(
                        (wishlistItem) =>
                            wishlistItem.product_id == item.product_id
                    ) ? (
                        <img
                            src='/icons/heart-fill.svg'
                            alt='heart'
                            onClick={() => removeFromWishlist(item.product_id)}
                        />
                    ) : (
                        <img
                            src='/icons/card-heart.svg'
                            alt='heart'
                            onClick={() => addToWishlist(item.product_id)}
                        />
                    )} */}
                </div>
            </Link>

            <button
                className={styles.button}
                onClick={() => AddToCart({ ...item, amount: 1 })}
                disabled={cart?.find(
                    (cartItem) => cartItem.product_id == item.product_id
                )}
            >
                {!cart?.find(
                    (cartItem) => cartItem.product_id == item.product_id
                )
                    ? "Add to cart"
                    : "Added to cart "}
            </button>

            <div className={styles.content}>
                {/* <Image
                    src='/icons/rating.svg'
                    alt='rating'
                    width={120}
                    height={24}
                /> */}
                <p className={styles.title}>{item?.name}</p>
                <p className={styles.price}>
                    ${item?.price}
                    {item?.oldPrice && (
                        <span className={styles.oldPrice}>
                            ${item?.oldPrice}
                        </span>
                    )}
                </p>
            </div>
        </div>
    );
}
