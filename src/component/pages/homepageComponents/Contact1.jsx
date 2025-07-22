import React, { useState, useEffect } from "react";
import "./Contact1.css";

const Contact = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const animateStyle = (delay = "0s") => ({
    opacity: isVisible.contact ? 1 : 0,
    transform: isVisible.contact ? "translateY(0)" : "translateY(30px)",
    transition: `all 0.8s ease ${delay}`,
  });

  return (
    <div className="contact-page">
      <section className="contact-section" aria-labelledby="contact-heading">
        <div className="contact-container">
          <h2
            id="contact"
            className="animate-on-scroll contact-title"
            style={animateStyle("0s")}
          >
            Get In Touch
          </h2>

          <p
            className="contact-subtitle animate-on-scroll"
            style={animateStyle("0.2s")}
          >
            Ready to enhance your industrial processes? Reach out to us.
          </p>

          <div className="contact-grid">
            <div
              className="contact-card animate-on-scroll"
              style={animateStyle("0.3s")}
            >
              <h3 className="contact-card-title">📞 Call Us</h3>
              <p className="contact-card-text">+91 9891868928</p>
            </div>

            <div
              className="contact-card animate-on-scroll"
              style={animateStyle("0.4s")}
            >
              <h3 className="contact-card-title">✉️ Email Us</h3>
              <p className="contact-card-text">
                <a href="mailto:sales@uventogenix.com">sales@uventogenix.com</a>
              </p>
            </div>

            <div
              className="contact-card animate-on-scroll"
              style={animateStyle("0.5s")}
            >
              <h3 className="contact-card-title">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  className="linkedin-icon"
                />
                LinkedIn
              </h3>
              <p className="contact-card-text">
                <a
                  href="https://www.linkedin.com/company/uvento-genix/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Uvento Genix on LinkedIn"
                >
                  Visit our LinkedIn profile
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
