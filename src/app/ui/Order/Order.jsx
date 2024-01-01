"use client";

import { useMediaQuery } from "react-responsive";
import styles from "./Order.module.scss";

export default function Order({ item }) {
    console.log(item);
    const isMobile = useMediaQuery({ maxWidth: 769 });

    return !isMobile ? (
        <tr className={styles.tr}>
            <td className={styles.td}>{item?.order_id}</td>
            <td className={styles.td}>
                {item?.order_date.toLocaleDateString()}
            </td>
            <td className={styles.td}>{item?.status}</td>
            <td className={styles.td}>{item?.amount}</td>
        </tr>
    ) : (
        <div className={styles.orderMobile}>
            <div className='flexBetween'>
                <span>Number ID</span>
                <p>{item.order_id}</p>
            </div>
            <div className='flexBetween'>
                <span>Dates</span>
                <p>{item?.order_date.toLocaleDateString()}</p>
            </div>
            <div className='flexBetween'>
                <span>Status</span>
                <p>{item.status}</p>
            </div>
            <div className='flexBetween'>
                <span>Price</span>
                <p>${item.amount}</p>
            </div>
        </div>
    );
}
