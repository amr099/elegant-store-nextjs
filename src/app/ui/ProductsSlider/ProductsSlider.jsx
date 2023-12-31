"use client";

import { register } from "swiper/element/bundle";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useRef } from "react";

export default function ProductsSlider({ items, wishlist }) {
    const swiperRef = useRef(null);

    useEffect(() => {
        register();
        const params = {
            slidesPerView: 3,
            breakpoints: {
                768: {
                    slidesPerView: 4,
                },
            },
        };
        Object.assign(swiperRef.current, params);
        swiperRef.current.initialize();
    }, []);

    return (
        <swiper-container
            init='false'
            ref={swiperRef}
            speed='500'
            loop='true'
            css-mode='true'
        >
            {items?.map((item) => (
                <swiper-slide key={item.id}>
                    <ProductCard item={item} wishlist={wishlist} />
                </swiper-slide>
            ))}
        </swiper-container>
    );
}
