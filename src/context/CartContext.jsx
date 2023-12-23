"use client";

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let count = 0;
        let total = 0;
        for (let item of cart) {
            count += Number(item?.amount);
            total += Number(item?.amount * item?.price);
        }
        setCount(count);
        setTotal(total);

        // if (localStorage.getItem("cart") != "undefined") {
        //     setCart(JSON.parse(localStorage.getItem("cart")));
        // }
    }, [cart]);

    // const AddToCart = (item) => {
    //     if (!cart.find((cartItem) => cartItem?.id == item?.id)) {
    //         setCart([...cart, item]);
    //         localStorage.setItem("cart", JSON.stringify([...cart, item]));
    //     }
    // };

    // const changeQuantity = (id, amount) => {
    //     setCart((cart) =>
    //         cart.map((item) => {
    //             if (item?.id == id) {
    //                 return { ...item, amount: amount };
    //             } else {
    //                 return { ...item };
    //             }
    //         })
    //     );
    //     localStorage.setItem(
    //         "cart",
    //         JSON.stringify(
    //             cart.map((item) => {
    //                 if (item?.id == id) {
    //                     return { ...item, amount: amount };
    //                 } else {
    //                     return { ...item };
    //                 }
    //             })
    //         )
    //     );
    // };

    // const removeFromCart = (id) => {
    //     setCart(cart.filter((item) => item?.id != id));
    //     localStorage.setItem(
    //         "cart",
    //         JSON.stringify(cart.filter((item) => item?.id != id))
    //     );
    // };

    // const clearCart = () => {
    //     setCart([]);
    //     localStorage.setItem("cart", JSON.stringify([]));
    // };

    return (
        <CartContext.Provider
        // value={{
        //     AddToCart,
        //     cart,
        //     setCart,
        //     removeFromCart,
        //     changeQuantity,
        //     clearCart,
        //     count,
        //     total,
        // }}
        >
            {children}
        </CartContext.Provider>
    );
}
