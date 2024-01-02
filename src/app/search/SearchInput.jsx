"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchInput() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const style = {
        boxSizing: "border-box",
        display: "block",
        width: "80%",
        margin: "0 auto",
    };

    const onSearch = useDebouncedCallback((q) => {
        console.log(q);
        const params = new URLSearchParams(searchParams);
        params.set("q", q);
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <input
            type='search'
            placeholder='Search'
            style={style}
            onChange={(e) => onSearch(e.target.value)}
        ></input>
    );
}
