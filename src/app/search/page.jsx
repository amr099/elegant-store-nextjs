import styles from "./search.module.scss";
import ProductCard from "@/app/ui/ProductCard/ProductCard";
import { searchProduct } from "@/app/lib/data";
import SearchInput from "./SearchInput";
import { Suspense } from "react";

export default async function Page({ searchParams }) {
    const products = await searchProduct(searchParams.q);

    return (
        <div className='container'>
            <SearchInput />

            <div className={styles.grid}>
                <Suspense fallback='Loading...'>
                    {products?.map((item) => (
                        <ProductCard item={item} key={item.product_id} />
                    ))}
                </Suspense>
            </div>
        </div>
    );
}
