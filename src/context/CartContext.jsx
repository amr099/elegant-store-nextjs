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
    }, [cart]);

    const AddToCart = (item) => {
        if (
            !cart.find((cartItem) => cartItem?.product_id == item?.product_id)
        ) {
            setCart([...cart, item]);
        }
    };

    const changeQuantity = (id, amount) => {
        setCart((cart) =>
            cart.map((item) => {
                if (item?.product_id == id) {
                    return { ...item, amount: amount };
                } else {
                    return { ...item };
                }
            })
        );
    };

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item?.product_id != id));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                AddToCart,
                cart,
                setCart,
                removeFromCart,
                changeQuantity,
                clearCart,
                count,
                total,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
