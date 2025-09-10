import React from "react";
import styles from "./Menu.module.css";

const Menu = () => {
    return (
        <div className={styles.menu}>
            <h2>Our Menu</h2>
            <p>Discover a variety of dishes crafted with passion and expertise. From classic favorites to new flavors, there’s something for everyone.</p>
            <ul>
                <li>Margherita Pizza - Fresh basil & mozzarella</li>
                <li>Spaghetti Carbonara - Creamy sauce with pancetta</li>
                <li>Grilled Chicken Salad - Crisp veggies & vinaigrette</li>
                <li>Cheeseburger Deluxe - Juicy patty with toppings</li>
            </ul>
        </div>
    );
};

export default Menu;
