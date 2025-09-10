import React from "react";
import Link from "next/link";
import styles from "../../styles/MyApp.module.css";

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <nav className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/locations">Locations</Link>
                <Link href="/order">Order</Link>
                <Link href="/billing">Billing</Link>
            </nav>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
