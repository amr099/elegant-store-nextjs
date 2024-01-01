import { fetchProduct, fetchProducts, fetchWhishlist } from "@/app/lib/data";
import ProductsSlider from "@/app/ui/ProductsSlider/ProductsSlider";
import { notFound } from "next/navigation";
import ProductDetails from "./ProductDetails";
import { getServerSession } from "next-auth";

export default async function Page({ params }) {
    const session = getServerSession();
    const { id } = params;
    const product = await fetchProduct(id);
    const products = await fetchProducts();
    const wishlist = session?.user?.email ? await fetchWhishlist() : [];
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
