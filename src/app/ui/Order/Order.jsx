"use client";

import { useMediaQuery } from "react-responsive";

export default function Order({ item }) {
    console.log(item);
    const isMobile = useMediaQuery({ maxWidth: 769 });

    return !isMobile ? (
        <tr>
            <td>{item?.order_id}</td>
            <td>{item?.date.toLocaleDateString()}</td>
            <td>{item?.status}</td>
            <td>{item?.total_amount}</td>
        </tr>
    ) : (
        <div className={styles.orderMobile}>
            <div className='flexBetween'>
                <span>Number ID</span>
                <p>{item.order_id}</p>
            </div>
            <div className='flexBetween'>
                <span>Dates</span>
                <p>{item?.date.toLocaleDateString()}</p>
            </div>
            <div className='flexBetween'>
                <span>Status</span>
                <p>{item.status}</p>
            </div>
            <div className='flexBetween'>
                <span>Price</span>
                <p>${item.total_amount}</p>
            </div>
        </div>
    );
}
