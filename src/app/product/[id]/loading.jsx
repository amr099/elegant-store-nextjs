import React from "react";
import ProductDetailsSkeleton from "@/app/ui/Skeletons/ProductDetailsSkeleton";

export default function loading() {
    return (
        <div className='container'>
            <ProductDetailsSkeleton />
        </div>
    );
}
