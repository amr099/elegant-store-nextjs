import styles from "./page.module.css";
import Link from "next/link";
import Article from "./ui/Article/Article";
import Cards from "./ui/Cards/Cards";
import Image from "next/image";
import HomeSlider from "./ui/HomeSlider/HomeSlider";
import ProductsSlider from "./ui/ProductsSlider/ProductsSlider";
import { fetchCategories, fetchProducts, fetchWhishlist } from "./lib/data";

export default async function Home() {
    const categories = await fetchCategories();
    const products = await fetchProducts();
    const wishlist = await fetchWhishlist();

    return (
        <>
            <HomeSlider />
            <div className='container'>
                <div className={styles.categoriesGrid}>
                    {categories?.map((cat) => (
                        <div
                            className={styles.category}
                            key={cat.category_id}
                            style={{ backgroundImage: `url(${cat.img_url})` }}
                        >
                            <div className={styles.titleDiv}>
                                <h6 className={styles.h6}>{cat?.name}</h6>
                                <Link
                                    href={`/shop/${cat?.name}`}
                                    className='animated'
                                >
                                    Shop Now{" "}
                                    <Image
                                        src='/icons/arrow-right.svg'
                                        alt='arrow'
                                        width={24}
                                        height={24}
                                    />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.sectionHeader}>
                    <h4>New Arrivals</h4>
                    <Link href='/shop' className='animated'>
                        More products{" "}
                        <Image
                            src='/icons/arrow-right.svg'
                            alt='arrow'
                            width={24}
                            height={24}
                        />
                    </Link>
                </div>

                <ProductsSlider items={products} wishlist={wishlist} />

                <Cards />
            </div>

            <div className={styles.saleGrid}>
                <img src='/imgs/sale.png' alt='sale' className={styles.img} />
                <div className={styles.saleContent}>
                    <span className={styles.span}>SALE UP TO 35% OFF</span>
                    <h4>HUNDREDS of New lower prices!</h4>
                    <p>
                        It’s more affordable than ever to give every room in
                        your home a stylish makeover
                    </p>
                    <Link href='/shop' className={`animated ${styles.a}`}>
                        {" "}
                        Shop now{" "}
                        <img src='/icons/arrow-right.svg' alt='arrow' />
                    </Link>
                </div>
            </div>
            <div className='container'>
                <div className={styles.sectionHeader}>
                    <h4>Articles</h4>
                    <Link href='/blog' className='animated'>
                        More articles{" "}
                        <Image
                            src='/icons/arrow-right.svg'
                            alt='arrow'
                            width={24}
                            height={24}
                        />
                    </Link>
                </div>

                <div className={styles.articlesGrid}>
                    <Article />
                    <Article />
                    <Article />
                </div>
            </div>
        </>
    );
}
