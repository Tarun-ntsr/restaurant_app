import React from "react";
import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.about}>
            <h2>About Our Restaurant</h2>
            <p>Established in 2010, we are passionate about serving delicious and fresh meals made from locally sourced ingredients. Our goal is to create a dining experience that’s not only satisfying but also memorable.</p>
            <p>We believe that good food brings people together. Whether you are here for a family dinner, a casual lunch, or a celebration, we are committed to making it special.</p>
        </div>
    );
};

export default About;
