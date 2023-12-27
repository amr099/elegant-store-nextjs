"use client";

import styles from "./ProductCard.module.css";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

export default function ProductCard({ item }) {
    const { AddToCart } = useContext(CartContext);
    const productImg = {
        backgroundImage: `url(${item?.img_url})`,
    };

    return (
        <div className={styles.product}>
            <Link href={`/product/${item?.product_id}`}>
                <div className={styles.card} style={productImg}>
                    <div className={styles.col}>
                        <div className={styles.new}>new</div>
                        <div className={styles.offer}>-50%</div>
                    </div>
                    <Image
                        src='/icons/card-heart.svg'
                        alt='heart'
                        width={24}
                        height={24}
                    />
                </div>
            </Link>
            <button
                className={styles.button}
                onClick={() => AddToCart({ ...item, amount: 1 })}
            >
                Add to cart
            </button>
            <div className={styles.content}>
                <Image
                    src='/icons/rating.svg'
                    alt='rating'
                    width={120}
                    height={24}
                />
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
