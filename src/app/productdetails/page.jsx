"use client";

import styles from "./ProductDetails.module.css";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsSlider from "../ui/ProductsSlider/ProductsSlider";
import Image from "next/image";
import { Link } from "next/link";
import ProductDetailsSkeleton from "../ui/Skeletons/ProductDetailsSkeleton";
import { CartContext } from "@/context/CartContext";

export default function Page() {
    const [product, setProduct] = useState();
    // const params = useParams();
    const { AddToCart } = useContext(CartContext);

    // useEffect(() => {
    //     const getProduct = async () => {
    //         let products = [];
    //         const response = await fetch(
    //             "https://657600c70febac18d4038f91.mockapi.io/api/products"
    //         );
    //         const data = await response.json();
    //         for (let i in data) {
    //             products.push(...data[i].products);
    //         }
    //         setProduct(products.find((p) => p.id == params.id));
    //     };
    //     getProduct();
    // }, [params]);
    return (
        <div className='container'>
            {product ? (
                <>
                    <div className={styles.productGrid}>
                        {/* <img
                    src={product?.img}
                    alt='p-img'
                    className={styles.thumbnail}
                /> */}
                        {/* <div className={styles.gallary}> */}
                        <Image src={product?.img} alt='p-img' />
                        {/* </div> */}
                        <div className={styles.details}>
                            <Image src='/icons/rating.svg' alt='rating' />
                            <h4>{product.name}</h4>
                            <p className={styles.desc}>
                                {product?.description}
                            </p>
                            <div className='flex'>
                                <h6>${product?.price}</h6>{" "}
                                {product?.oldPrice && (
                                    <span className={styles.oldPrice}>
                                        ${product?.oldPrice}
                                    </span>
                                )}
                            </div>
                            <span>Measurements</span>
                            <p>17 1/2x20 5/8 </p>
                            {/* <span>Choose Color</span>
                    <p>Black</p>
                    <div className='flex'>
                        <img src={pColor} alt='p-color' />
                        <img src={pColor} alt='p-color' />
                        <img src={pColor} alt='p-color' />
                        <img src={pColor} alt='p-color' />
                    </div> */}
                            <button
                                onClick={() =>
                                    AddToCart({ ...product, amount: 1 })
                                }
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                    <div className='flexBetween'>
                        <h6>You might also like</h6>
                        <Link href='/shop' className='animated'>
                            more products{" "}
                            <Image src='/icons/arrow-right.svg' alt='arrow' />
                        </Link>
                    </div>{" "}
                </>
            ) : (
                <ProductDetailsSkeleton />
            )}
            <ProductsSlider />
        </div>
    );
}
