"use client";

import styles from "./Shop.module.css";
import { useEffect, useState } from "react";
import ProductCard from "../ui/ProductCard/ProductCard";
import ProductCardSkeleton from "../ui/Skeletons/ProductCardSkeleton";
import { useRouter } from "next/router";

export default function Page() {
    const [products, setProducts] = useState([]);
    const [sortby, setSortby] = useState("");
    // const router = useRouter();
    const categories = ["all", "kitchen", "bedroom", "living room"];

    // const selectCategory = (e) => {
    //     if (e.target.value == "all") {
    //         router.push(`/shop`);
    //     } else {
    //         router.push(`/shop/${e.target.value}`);
    //     }
    // };

    const sortFun = (a, b) => {
        if (sortby === "asc") return a.price - b.price;
        else if (sortby === "dec") return b.price - a.price;
        else return;
    };

    useEffect(() => {
        const getProducts = async () => {
            let products = [];
            const response = await fetch(
                "https://657600c70febac18d4038f91.mockapi.io/api/products"
            );
            const data = await response.json();

            if (params.category) {
                setProducts(
                    data.find((cat) => cat.name == params.category).products
                );
            } else {
                for (let i in data) {
                    products.push(...data[i].products);
                }
                setProducts(products);
            }
        };

        getProducts();
    }, []);
    return (
        <div className='container'>
            <div className={styles.shopCover}>
                <h3>Shop Page</h3>
                <p>Let’s design the place you always imagined.</p>
            </div>
            <div className='flexBetween'>
                <div className='flex'>
                    <div className={styles.select}>
                        <label htmlFor='category'>Categories</label>
                        <select
                            name='category'
                            id='category'
                            onChange={(e) => selectCategory(e)}
                            value={params.category}
                        >
                            {categories?.map((cat) => (
                                <option value={cat} key={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.select}>
                        <label htmlFor='sort'>SortBy</label>
                        <select
                            name='sort'
                            id='sort'
                            onChange={(e) => setSortby(e.target.value)}
                        >
                            <option value='' disabled selected></option>
                            <option value='asc'>Price (ASC)</option>
                            <option value='dec'>Price (DEC)</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={styles.shopGrid}>
                {products.length != 0
                    ? products
                          ?.sort(sortFun)
                          ?.map((item) => (
                              <ProductCard item={item} key={item.id} />
                          ))
                    : Array.from({ length: 8 }, (_, index) => index + 1).map(
                          (i) => <ProductCardSkeleton key={i} />
                      )}
            </div>
        </div>
    );
}
