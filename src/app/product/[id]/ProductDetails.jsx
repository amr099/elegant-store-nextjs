"use client";

import styles from "./Product.module.scss";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { addToWishlist, removeFromWishlist } from "./../../lib/actions";
export default function ProductDetails({ product, wishlist }) {
    const { cart, AddToCart } = useContext(CartContext);

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
                            {cart?.find(
                                (cartItem) =>
                                    cartItem.product_id == product.product_id
                            )
                                ? "Added to cart"
                                : "Add to cart"}
                        </button>
                        {!wishlist?.find(
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
