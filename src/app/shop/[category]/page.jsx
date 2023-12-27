import { fetchCategories, fetchProductsByCategory } from "../../lib/data";
import ProductCard from "../../ui/ProductCard/ProductCard";
import styles from "../Shop.module.css";
import ShopCover from "./../ShopCover";

export default async function Page({ params }) {
    const products = await fetchProductsByCategory(params.category);
    const categories = await fetchCategories();

    return (
        <div className='container'>
            <ShopCover categories={categories} />
            <div className={styles.shopGrid}>
                {products?.map((item) => (
                    <ProductCard item={item} key={item.product_id} />
                ))}
            </div>
        </div>
    );
}
