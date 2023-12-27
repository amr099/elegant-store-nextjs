import { fetchOrders } from "@/app/lib/data";
import styles from "../Profile.module.css";
import Order from "./../../ui/Order/Order";
import { getServerSession } from "next-auth";

export default async function Page() {
    const session = await getServerSession();
    const orders = await fetchOrders(session.user.email);
    console.log(orders[0].date.toLocaleDateString());
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
                {orders?.map((order) => (
                    <Order item={order} key={order?.order_id} />
                ))}
            </tbody>
        </table>
    );
}
