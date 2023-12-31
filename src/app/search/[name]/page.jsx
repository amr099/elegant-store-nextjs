// import styles from "../../Shop.module.css";
import ProductCard from "@/app/ui/ProductCard/ProductCard";
import { searchProduct } from "@/app/lib/data";

export default async function Page({ params }) {
    const products = await searchProduct(params.name);
    console.log(params.name);

    return (
        <div className='container'>
            {/* <div className={styles.shopGrid}> */}
            {products?.map((item) => (
                <ProductCard item={item} key={item.product_id} />
            ))}
        </div>
        // </div>
    );
}
