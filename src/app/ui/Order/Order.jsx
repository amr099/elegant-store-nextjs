"use client";

import { useMediaQuery } from "react-responsive";

export default function Order({ item }) {
    const isMobile = useMediaQuery({ maxWidth: 769 });

    return !isMobile ? (
        <tr>
            <td>{item.id}</td>
            <td>{item.date}</td>
            <td>{item.status}</td>
            <td>{item.price}</td>
        </tr>
    ) : (
        <div className={styles.orderMobile}>
            <div className='flexBetween'>
                <span>Number ID</span>
                <p>{item.id}</p>
            </div>
            <div className='flexBetween'>
                <span>Dates</span>
                <p>{item.date}</p>
            </div>
            <div className='flexBetween'>
                <span>Status</span>
                <p>{item.status}</p>
            </div>
            <div className='flexBetween'>
                <span>Price</span>
                <p>${item.price}</p>
            </div>
        </div>
    );
}
