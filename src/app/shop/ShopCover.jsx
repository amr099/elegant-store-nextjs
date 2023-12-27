"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./Shop.module.css";
import { useRouter } from "next/navigation";

export default function ShopCover({ categories }) {
    const [selected, setSelected] = useState();
    const router = useRouter();

    const onChange = (category) => {
        console.log(category);
        setSelected(category);
        router.replace(`/shop/${category}`);
    };
    return (
        <>
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
                            onChange={(e) => {
                                onChange(e.target.value);
                            }}
                            value={selected}
                        >
                            {categories?.map((cat) => (
                                <option
                                    value={cat?.category_id}
                                    key={cat?.category_id}
                                >
                                    {cat?.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.select}>
                        <label htmlFor='sort'>SortBy</label>
                        <select name='sort' id='sort'>
                            <option value='' disabled selected></option>
                            <option value='asc'>Price (ASC)</option>
                            <option value='dec'>Price (DEC)</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
}
