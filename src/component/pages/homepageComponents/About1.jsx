import React from "react";
import styles from "./About1.module.css";

const About = () => {
  return (
    <section id="about-section" className={styles.about}>
      <div className={styles["about-container"]}>
        <h2 className={styles["about-title"]}>About Uvento Genix</h2>

        <p className={styles["company-description"]}>
          Uvento Genix Pvt Ltd is a dynamic and forward-thinking engineering
          solutions provider, focused on enhancing industrial processes through
          reliable and high-performance products. <br /> At Uvento Genix we
          specialize in delivering high-quality industrial and engineering
          products that empower businesses across India to achieve operational
          excellence. With a commitment to precision, innovation, and customer
          satisfaction, we provide a comprehensive range of solutions designed
          to meet the diverse needs of modern industries. Founded on the
          principles of quality, integrity, and partnership, Uvento Genix is
          dedicated to helping clients overcome engineering challenges with
          tailored solutions. Our expert team works closely with you to
          understand your specific requirements and deliver products that
          enhance efficiency, safety, and performance
        </p>

        <div className={styles["about-cards"]}>
          <div className={styles["about-card"]}>
            <div className={styles["card-icon"]}>🎯</div>
            <h3 className={styles["card-title"]}>Our Mission</h3>
            <p className={styles["card-description"]}>
              “At Uvento Genix, our mission is to drive the future of smart and
              sustainable manufacturing by delivering cutting-edge Industry 4.0
              solutions, reliable power management systems, precision cutting
              tools, and advanced air purification technologies like Oil Mist
              Collectors. We are committed to enhancing efficiency, safety, and
              environmental responsibility across industrial operations through
              innovation, quality, and customer-centric service.”
            </p>
          </div>

          <div className={styles["about-card"]}>
            <div className={styles["card-icon"]}>🚀</div>
            <h3 className={styles["card-title"]}>Our Vision</h3>
            <p className={styles["card-description"]}>
              “To be India’s most trusted partner in industrial innovation by
              delivering world-class Industry 4.0 solutions, precision cutting
              tools, clean air systems, and reliable power infrastructure that
              strengthens the backbone of Indian manufacturing."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
