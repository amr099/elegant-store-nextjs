import styles from "./Shop.module.scss";
import ProductCard from "../ui/ProductCard/ProductCard";
import {
    fetchProducts,
    fetchCategories,
    fetchWhishlist,
    fetchSortedProducts,
} from "../lib/data";
import ShopCover from "./ShopCover";
import { Suspense } from "react";

export default async function Page({ searchParams }) {
    let products = await fetchProducts();
    const categories = await fetchCategories();
    const wishlist = await fetchWhishlist();

    if (searchParams) {
        products = await fetchSortedProducts(searchParams.sort);
    }

    return (
        <div className='container'>
            <Suspense fallback='Loading...'>
                <ShopCover categories={categories} />
            </Suspense>
            <div className={styles.shopGrid}>
                <Suspense fallback='Loading...'>
                    {products?.map((item) => (
                        <ProductCard
                            item={item}
                            key={item.product_id}
                            wishlist={wishlist}
                        />
                    ))}
                </Suspense>
            </div>
        </div>
    );
}
