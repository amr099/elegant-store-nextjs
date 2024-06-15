import { notFound } from "next/navigation";
import { fetchCategories, fetchProductsByCategory } from "../../lib/data";
import ProductCard from "../../ui/ProductCard/ProductCard";
import styles from "../Shop.module.scss";
import ShopCover from "../ShopCover";
import { Suspense } from "react";

export default async function Page({ params, searchParams }) {
    const category = decodeURIComponent(params.category);
    const products = await fetchProductsByCategory(category);
    const categories = await fetchCategories();

    if (products.length === 0) {
        notFound();
    }

    return (
        <div className='container'>
            <Suspense fallback='Loading...'>
                <ShopCover categories={categories} category={category} />
            </Suspense>
            <div className={styles.shopGrid}>
                <Suspense fallback='Loading...'>
                    {products?.map((item) => (
                        <ProductCard item={item} key={item.product_id} />
                    ))}
                </Suspense>
            </div>
        </div>
    );
}
