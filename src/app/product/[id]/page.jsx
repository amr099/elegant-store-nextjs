import styles from "./ProductDetails.module.css";
import Link from "next/link";
import { fetchProduct, fetchProducts } from "@/app/lib/data";
import ProductDetailsSkeleton from "@/app/ui/Skeletons/ProductDetailsSkeleton";
import ProductsSlider from "@/app/ui/ProductsSlider/ProductsSlider";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
    const id = params.id;
    const product = await fetchProduct(id);
    const products = await fetchProducts();
    if (!product) {
        notFound();
    }

    return (
        <div className='container'>
            {product ? (
                <>
                    <div className={styles.productGrid}>
                        {/* <img
                    src={product?.img}
                    alt='p-img'
                    className={styles.thumbnail}
                /> */}
                        {/* <div className={styles.gallary}> */}
                        <img
                            src={product.img_url}
                            alt='p-img'
                            className={styles.img}
                        />
                        {/* </div> */}
                        <div className={styles.details}>
                            {/* <img src='/icons/rating.svg' alt='rating' /> */}
                            <h4>{product.name}</h4>
                            <p className={styles.desc}>{product.description}</p>
                            <div className='flex'>
                                <h6>${product.price}</h6>{" "}
                                {/* {product?.oldPrice && (
                                    <span className={styles.oldPrice}>
                                        ${product?.oldPrice}
                                    </span>
                                )} */}
                            </div>
                            {/* <span>Measurements</span>
                            <p>17 1/2x20 5/8 </p> */}
                            {/* <span>Choose Color</span>
                    <p>Black</p>
                    <div className='flex'>
                        <img src={pColor} alt='p-color' />
                        <img src={pColor} alt='p-color' />
                        <img src={pColor} alt='p-color' />
                        <img src={pColor} alt='p-color' />
                    </div> */}
                            <button
                            // onClick={() =>
                            //     AddToCart({ ...product, amount: 1 })
                            // }
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                    <div className='flexBetween'>
                        <h6>You might also like</h6>
                        <Link href='/shop' className='animated'>
                            more products{" "}
                            <img src='/icons/arrow-right.svg' alt='arrow' />
                        </Link>
                    </div>{" "}
                </>
            ) : (
                <ProductDetailsSkeleton />
            )}
            <ProductsSlider items={products} />
        </div>
    );
}
