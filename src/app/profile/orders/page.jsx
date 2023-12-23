"use client";

import styles from "../Profile.module.css";
import { useMediaQuery } from "react-responsive";
import { useContext } from "react";
import Order from "@/app/ui/Order/Order";
import OrderMobile from "@/app/ui/Order/OrderMobile";
import { AuthContext } from "@/context/AuthContext";

export default function Page() {
    const { user } = useContext(AuthContext);
    const isMobile = useMediaQuery({ maxWidth: 769 });
    return (
        <table className={styles.orders}>
            <thead className={styles.thead}>
                <tr className={styles.tr}>
                    <td>Number ID</td>
                    <td>Date</td>
                    <td>Status</td>
                    <td>Price</td>
                </tr>
            </thead>
            <tbody>
                {user?.orders?.map((item) =>
                    isMobile ? (
                        <OrderMobile item={item} key={item?.id} />
                    ) : (
                        <Order item={item} key={item?.id} />
                    )
                )}
            </tbody>
        </table>
    );
}
