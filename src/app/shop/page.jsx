import styles from "./Shop.module.css";
import ProductCard from "../ui/ProductCard/ProductCard";
import { fetchProducts, fetchCategories } from "../lib/data";
import ShopCover from "./ShopCover";

export default async function Page() {
    const products = await fetchProducts();
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
