import React from "react";
import styles from "./Locations.module.css";

const Locations = () => {
    return (
        <div className={styles.locations}>
            <h2>Our Locations</h2>
            <p>We are proud to serve in multiple cities. Visit any of our locations and enjoy our culinary delights!</p>
            <ul>
                <li>New York - Downtown</li>
                <li>Los Angeles - West Side</li>
                <li>Chicago - Central Park</li>
                <li>Houston - Midtown</li>
            </ul>
        </div>
    );
};

export default Locations;
