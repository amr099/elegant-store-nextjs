"use client"

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(false);

    useEffect(() => {}, []);
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}
