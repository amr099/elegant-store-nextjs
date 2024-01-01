"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className='center-content'>
            <h6>Something went wrong!</h6>
            <button onClick={() => reset()}>Try again</button>
        </div>
    );
}
