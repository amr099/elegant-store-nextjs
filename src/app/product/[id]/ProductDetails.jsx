"use client";

import styles from "./Product.module.css";
import Link from "next/link";
import ProductDetailsSkeleton from "@/app/ui/Skeletons/ProductDetailsSkeleton";
import { useContext, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { CartContext } from "@/context/CartContext";
export default function ProductDetails({ product, wishlist }) {
    const [wishlistState, setWishlist] = useState(wishlist);
    const router = useRouter();
    const pathname = usePathname();
    console.log(router.asPath);
    const { cart, AddToCart } = useContext(CartContext);

    const addToWishlist = async (product_id) => {
        try {
            const response = await fetch("/api/wishlist/add", {
                method: "POST",
                body: JSON.stringify({
                    product_id: product_id,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setWishlist(data.wishlist);
            } else {
                console.error("Failed to add to wishlist");
            }
        } catch (error) {
            console.error("Error adding to wishlist", error);
        }
    };

    const removeFromWishlist = async (product_id) => {
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
        <div className='container'>
            <div className={styles.productGrid}>
                {/* <img
                    src={product?.img}
                    alt='p-img'
                    className={styles.thumbnail}
                /> */}
                {/* <div className={styles.gallary}> */}
                <img src={product.img_url} alt='p-img' className={styles.img} />
                {/* </div> */}
                <div className={styles.details}>
                    {/* <img src='/icons/rating.svg' alt='rating' /> */}
                    <h4>{product.name}</h4>
                    <p className={styles.desc}>{product.description}</p>
                    <div className='flex'>
                        <h6>${product.price}</h6>{" "}
                        {/* {product?.oldPrice && (
                                    <span className={styles.oldPrice}>
                                        ${product?.oldPrice}
                                    </span>
                                )} */}
                    </div>
                    {/* <span>Measurements</span>
                            <p>17 1/2x20 5/8 </p> */}
                    {/* <span>Choose Color</span>
                    <p>Black</p>
                    <div className='flex'>
                        <img src={pColor} alt='p-color' />
                        <img src={pColor} alt='p-color' />
                        <img src={pColor} alt='p-color' />
                        <img src={pColor} alt='p-color' />
                    </div> */}
                    <div className={styles.flex}>
                        <button
                            disabled={cart.find(
                                (cartItem) =>
                                    cartItem.product_id == product.product_id
                            )}
                            onClick={() => AddToCart({ ...product, amount: 1 })}
                        >
                            {cart.find(
                                (cartItem) =>
                                    cartItem.product_id == product.product_id
                            )
                                ? "Added to cart"
                                : "Add to cart"}
                        </button>
                        {!wishlistState.find(
                            (item) => item.product_id == product.product_id
                        ) ? (
                            <button
                                className={styles.addToWishlistButton}
                                onClick={() =>
                                    addToWishlist(product.product_id)
                                }
                            >
                                <img src='/icons/heart.svg' alt='heart' />
                            </button>
                        ) : (
                            <button
                                className={styles.removeFromWishlistButton}
                                onClick={() =>
                                    removeFromWishlist(product.product_id)
                                }
                            >
                                <img
                                    src='/icons/heart-fill.svg'
                                    alt='heart-fill'
                                />
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <div className='flexBetween'>
                <h6>You might also like</h6>
                <Link href='/shop' className='animated'>
                    more products{" "}
                    <img src='/icons/arrow-right.svg' alt='arrow' />
                </Link>
            </div>{" "}
        </div>
    );
}
