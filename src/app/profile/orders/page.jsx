import { fetchOrders } from "@/app/lib/data";
import styles from "../Profile.module.scss";
import Order from "./../../ui/Order/Order";
import { Suspense } from "react";

export default async function Page() {
    const userOrders = await fetchOrders();
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
                <Suspense fallback='Loading...'>
                    {userOrders?.map((order) => (
                        <Order item={order} key={order?.order_id} />
                    ))}
                </Suspense>
            </tbody>
        </table>
    );
}
