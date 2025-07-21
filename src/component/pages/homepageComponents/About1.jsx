import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about-section" className={styles.about}>
      <div className={styles["about-container"]}>
        <h2 className={styles["about-title"]}>About Uvento Genix</h2>

        <p className={styles["company-description"]}>
          Uvento Genix Pvt Ltd is a dynamic and forward-thinking engineering
          solutions provider, focused on enhancing industrial processes through
          reliable and high-performance products.
        </p>

        <div className={styles["about-cards"]}>
          <div className={styles["about-card"]}>
            <div className={styles["card-icon"]}>🎯</div>
            <h3 className={styles["card-title"]}>Our Mission</h3>
            <p className={styles["card-description"]}>
              To add value to existing customer processes by offering innovative
              solutions that enhance industrial efficiency and reliability.
            </p>
          </div>

          <div className={styles["about-card"]}>
            <div className={styles["card-icon"]}>🚀</div>
            <h3 className={styles["card-title"]}>Our Vision</h3>
            <p className={styles["card-description"]}>
              To become a trusted partner in industrial innovation and
              operational excellence, leading the way in engineering solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
