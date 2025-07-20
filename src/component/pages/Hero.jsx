import React from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

const Hero = () => {
  const headingText = "WELCOME TO UVENTO GENIX";
  const words = headingText.split(" ");

  return (
    <>
      <section className={styles.hero}>
        <div className={styles["hero-content"]}>
          <div className={styles["hero-title"]}>
            <h1>
              {words.map((word, index) => (
                <span
                  className={styles.word}
                  key={index}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {word}&nbsp;
                </span>
              ))}
            </h1>
            <p className={styles["hero-subtitle"]}>
              Engineering Excellence Through Innovation Since 2021
            </p>
            <div className={styles["hero-cta"]}>
              <a href="#services-section" className={styles["cta-button"]}>
                Explore Our Solutions
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
