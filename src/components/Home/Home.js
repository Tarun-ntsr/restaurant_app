import React from "react";
import styles from "../../styles/Home.module.css";

const Home = () => {
    return (
        <div className={styles.home}>
            <section className={styles.hero}>
                <h1>Welcome to Delight Burst!</h1>
                <p>Your culinary adventure begins here. Explore, taste, and enjoy world-class dishes made fresh every day!</p>
                <button className={styles.ctaButton}>Explore Our Menu</button>
            </section>

            <section className={styles.features}>
                <div className={styles.card}>
                    <div className={styles.icon}>🍕</div>
                    <h3>Fresh Ingredients</h3>
                    <p>We source the finest ingredients to ensure every bite is bursting with flavor.</p>
                </div>
                <div className={styles.card}>
                    <div className={styles.icon}>🚚</div>
                    <h3>Fast Delivery</h3>
                    <p>Get your favorite meals delivered hot and fresh, right to your doorstep.</p>
                </div>
                <div className={styles.card}>
                    <div className={styles.icon}>😊</div>
                    <h3>Friendly Service</h3>
                    <p>Our team is passionate about making your dining experience delightful and memorable.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
