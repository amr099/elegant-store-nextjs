import { notFound } from "next/navigation";
import { fetchCategories, fetchProductsByCategory } from "../../lib/data";
import ProductCard from "../../ui/ProductCard/ProductCard";
import styles from "../Shop.module.css";
import ShopCover from "../ShopCover";

export default async function Page({ params }) {
    const category = decodeURIComponent(params.category);
    const products = await fetchProductsByCategory(category);
    const categories = await fetchCategories();

    if (products.length === 0) {
        notFound();
    }

    return (
        <div className='container'>
            <ShopCover categories={categories} category={category} />
            <div className={styles.shopGrid}>
                {products?.map((item) => (
                    <ProductCard item={item} key={item.product_id} />
                ))}
            </div>
        </div>
    );
}
