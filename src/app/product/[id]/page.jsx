import { fetchProduct, fetchProducts, fetchWhishlist } from "@/app/lib/data";
import ProductDetailsSkeleton from "@/app/ui/Skeletons/ProductDetailsSkeleton";
import ProductsSlider from "@/app/ui/ProductsSlider/ProductsSlider";
import { notFound } from "next/navigation";
import ProductDetails from "./ProductDetails";

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
            <ProductDetails product={product} wishlist={wishlist} />

            <ProductsSlider items={products} />
        </div>
    );
}
