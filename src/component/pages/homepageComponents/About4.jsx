import React from "react";
import styles from "./About4.module.css";

const About = () => {
  return (
    <section id="about-section" className={styles.about}>
      <div className={styles["about-container"]}>
        {/* Hero Section */}
        <div className={styles["about-hero"]}>
          <h1 className={styles["about-title"]}>About Uvento Genix</h1>
          <p className={styles["company-description"]}>
            At <strong>Uvento Genix</strong>, we specialize in delivering
            high-quality industrial and engineering products that empower
            businesses across India to achieve operational excellence. With a
            strong commitment to{" "}
            <strong>precision, innovation, and customer satisfaction</strong>,
            we provide a comprehensive range of solutions designed to meet the
            diverse needs of modern industries.
          </p>
        </div>

        {/* Company Story */}
        <section className={styles["about-story"]}>
          <h2 className={styles["story-title"]}>Who We Are</h2>
          <p className={styles["story-description"]}>
            Founded on the principles of{" "}
            <strong>quality, integrity, and partnership</strong>, Uvento Genix
            is dedicated to helping clients overcome engineering challenges with
            tailored solutions. Our expert team works closely with you to
            understand your requirements and deliver products that enhance{" "}
            <strong>efficiency, safety, and performance</strong>.
          </p>
        </section>

        {/* Mission & Vision */}
        <div className={styles["about-cards"]}>
          <div className={styles["about-card"]}>
            <div className={styles["card-icon"]}>🎯</div>
            <h3 className={styles["card-title"]}>Our Mission</h3>
            <p className={styles["card-description"]}>
              "At Uvento Genix, our mission is to drive the future of smart and
              sustainable manufacturing by delivering cutting-edge{" "}
              <strong>
                Industry 4.0 solutions, reliable power management systems,
                precision cutting tools, and advanced air purification
                technologies such as Oil Mist Collectors
              </strong>
              . We are committed to enhancing{" "}
              <strong>
                efficiency, safety, and environmental responsibility
              </strong>{" "}
              across industrial operations through innovation, quality, and
              customer-centric service."
            </p>
          </div>
          <div className={styles["about-card"]}>
            <div className={styles["card-icon"]}>🚀</div>
            <h3 className={styles["card-title"]}>Our Vision</h3>
            <p className={styles["card-description"]}>
              "To be India's most trusted partner in industrial innovation by
              delivering world-class{" "}
              <strong>
                Industry 4.0 solutions, precision cutting tools, clean air
                systems, and reliable power infrastructure
              </strong>{" "}
              that strengthens the backbone of Indian manufacturing."
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className={styles["about-why"]}>
          <h2 className={styles["why-title"]}>Why Choose Us?</h2>
          <div className={styles["why-grid"]}>
            <div className={styles["why-item"]}>
              <div className={styles["why-icon"]}>🏆</div>
              <h4 className={styles["why-item-title"]}>Trusted Expertise</h4>
              <p className={styles["why-item-description"]}>
                A team of professionals with deep industry knowledge.
              </p>
            </div>
            <div className={styles["why-item"]}>
              <div className={styles["why-icon"]}>💡</div>
              <h4 className={styles["why-item-title"]}>Innovative Solutions</h4>
              <p className={styles["why-item-description"]}>
                Leveraging the latest Industry 4.0 technologies.
              </p>
            </div>
            <div className={styles["why-item"]}>
              <div className={styles["why-icon"]}>🌱</div>
              <h4 className={styles["why-item-title"]}>Sustainability Focus</h4>
              <p className={styles["why-item-description"]}>
                Prioritizing safety, efficiency, and eco-friendly practices.
              </p>
            </div>
            <div className={styles["why-item"]}>
              <div className={styles["why-icon"]}>🤝</div>
              <h4 className={styles["why-item-title"]}>
                Customer-Centric Approach
              </h4>
              <p className={styles["why-item-description"]}>
                Tailored solutions to match your unique needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
