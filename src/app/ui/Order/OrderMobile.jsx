import styles from "./Order.module.css";

export default function OrderMobile({ item }) {
    return (
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
