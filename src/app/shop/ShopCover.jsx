"use client";

import styles from "./Shop.module.css";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function ShopCover({ categories, category }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const onChange = (category) => {
        if (category === "all") {
            replace(`/shop`);
            return;
        }
        replace(`/shop/${category}`);
    };

    const onSort = (sortby) => {
        console.log(sortby);
        const params = new URLSearchParams(searchParams);
        params.set("sort", "price");
        replace(`${pathname}?${params.toString()}`);
    };
    return (
        <>
            <div className={styles.shopCover}>
                <h3>{category || "Shop Page"}</h3>
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
                            defaultValue={category}
                        >
                            <option value={"all"}>All</option>
                            {categories?.map((cat) => (
                                <option
                                    value={cat?.name}
                                    key={cat?.category_id}
                                >
                                    {cat?.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.select}>
                        <label htmlFor='sort'>SortBy</label>
                        <select
                            name='sort'
                            id='sort'
                            onChange={(e) => onSort(e.target.value)}
                        >
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
