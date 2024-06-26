import { fetchProduct, fetchProducts, fetchWhishlist } from "@/app/lib/data";
import ProductsSlider from "@/app/ui/ProductsSlider/ProductsSlider";
import { notFound } from "next/navigation";
import ProductDetails from "./ProductDetails";
import { Suspense } from "react";

export default async function Page({ params }) {
    const { id } = params;
    const product = await fetchProduct(id);
    const products = await fetchProducts();
    const wishlist = await fetchWhishlist();
    if (!product) {
        notFound();
    }

    return (
        <div className='container'>
            <Suspense fallback='Loading...'>
                <ProductDetails product={product} wishlist={wishlist} />
            </Suspense>
            <Suspense fallback='Loading...'>
                <ProductsSlider items={products} />
            </Suspense>
        </div>
    );
}
