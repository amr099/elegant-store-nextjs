"use client";

import { register } from "swiper/element/bundle";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useRef } from "react";

export default function ProductsSlider({ items, wishlist }) {
    const swiperRef = useRef(null);

    useEffect(() => {
        register();
        const params = {
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            slidesPerView: 1,
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1600: {
                    slidesPerView: 4,
                    spaceBetween: 40,
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
