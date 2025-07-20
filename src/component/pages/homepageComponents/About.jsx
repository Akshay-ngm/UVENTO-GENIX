import React, { useState, useEffect } from "react";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-section" className="about">
      <div className="about-container">
        <h2 className={`about-title ${isVisible ? "animate-in" : ""}`}>
          About Uvento Genix
        </h2>

        <div className="about-cards">
          <div
            className={`about-card ${isVisible ? "animate-in delay-1" : ""}`}
          >
            <div className="card-icon">🎯</div>
            <h3 className="card-title">Our Mission</h3>
            <p className="card-description">
              To add value to existing customer processes by offering innovative
              solutions that enhance industrial efficiency and reliability.
            </p>
          </div>

          <div
            className={`about-card ${isVisible ? "animate-in delay-2" : ""}`}
          >
            <div className="card-icon">🚀</div>
            <h3 className="card-title">Our Vision</h3>
            <p className="card-description">
              To become a trusted partner in industrial innovation and
              operational excellence, leading the way in engineering solutions.
            </p>
          </div>
        </div>

        <div
          className={`company-info ${isVisible ? "animate-in delay-3" : ""}`}
        >
          <p className="company-description">
            Uvento Genix Pvt Ltd is a dynamic and forward-thinking engineering
            solutions provider, focused on enhancing industrial processes
            through reliable and high-performance products.
          </p>
          <div className="company-details">
            <div className="detail-item">
              <strong>Founded:</strong> 2021
            </div>
            <div className="detail-item">
              <strong>Headquarters:</strong> Vasundhara, Ghaziabad, India
            </div>
            <div className="detail-item">
              <strong>Type:</strong> Private Limited Company
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
