"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function SearchInput() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const style = {
        boxSizing: "border-box",
        display: "block",
        width: "80%",
        margin: "2rem auto 4rem",
    };

    const onSearch = (q) => {
        const params = new URLSearchParams(searchParams);
        params.set("q", q);
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <input
            type='search'
            placeholder='Search'
            style={style}
            onChange={(e) => onSearch(e.target.value)}
        ></input>
    );
}
