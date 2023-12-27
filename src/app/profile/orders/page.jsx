import styles from "../Profile.module.css";

export default function Page() {
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
            <tbody></tbody>
        </table>
    );
}
