import React from "react";
import styles from "./Billing.module.css";

const Billing = () => {
    return (
        <div className={styles.billing}>
            <h2>Billing Information</h2>
            <p>Here you can view and manage your invoices, payment history, and outstanding balances. We offer secure payment methods and transparent billing policies.</p>
            <ul>
                <li>Invoice Downloads</li>
                <li>Payment Options</li>
                <li>Account Statements</li>
            </ul>
        </div>
    );
};

export default Billing;
