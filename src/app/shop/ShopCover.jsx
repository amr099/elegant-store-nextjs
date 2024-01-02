"use client";

import styles from "./Shop.module.scss";
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
        const params = new URLSearchParams(searchParams);
        params.set("sort", sortby);
        replace(`/shop?${params.toString()}`);
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
                            <option value='alpha-asc'>
                                Alphabetically, A-Z
                            </option>
                            <option value='alpha-des'>
                                Alphabetically, Z-A
                            </option>
                            <option value='price-asc'>
                                Price (Low to High)
                            </option>
                            <option value='price-des'>
                                Price (High to Low)
                            </option>
                            <option value='newest'>New to Old</option>
                            <option value='oldest'>Old to New</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
}
