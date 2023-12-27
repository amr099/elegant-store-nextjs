"use client";

import React, { createContext, useState } from "react";

export const DrawersContext = createContext();

export default function DrawersContextProvider({ children }) {
    const [flyoutCart, setFlyoutCart] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);

    return (
        <DrawersContext.Provider
            value={{ flyoutCart, setFlyoutCart, mobileNav, setMobileNav }}
        >
            {children}
        </DrawersContext.Provider>
    );
}
