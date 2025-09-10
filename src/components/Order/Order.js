import React from "react";
import styles from "./Order.module.css";

const Order = () => {
    return (
        <div className={styles.order}>
            <h2>Place Your Order</h2>
            <p>Choose from our delicious menu and place your order online. We offer contactless delivery and dine-in services for your convenience.</p>
            <button className={styles.button}>Start Ordering</button>
        </div>
    );
};

export default Order;
