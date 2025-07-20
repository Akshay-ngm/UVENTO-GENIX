import React, { useState, useEffect } from "react";
import "./Contact.css";

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

  return (
    <div className="contact-page">
      <section className="contact-section">
        <div className="contact-container">
          <h2
            id="contact"
            className="animate-on-scroll contact-title"
            style={{
              opacity: isVisible.contact ? 1 : 0,
              transform: isVisible.contact
                ? "translateY(0)"
                : "translateY(30px)",
              transition: "all 0.8s ease",
            }}
          >
            Get In Touch
          </h2>

          <p
            className="contact-subtitle"
            style={{
              opacity: isVisible.contact ? 1 : 0,
              transform: isVisible.contact
                ? "translateY(0)"
                : "translateY(30px)",
              transition: "all 0.8s ease 0.2s",
            }}
          >
            Ready to enhance your industrial processes? Contact us today!
          </p>

          <div className="contact-grid">
            <div
              className="contact-card"
              style={{
                opacity: isVisible.contact ? 1 : 0,
                transform: isVisible.contact
                  ? "translateY(0)"
                  : "translateY(30px)",
                transition: "all 0.8s ease 0.3s",
              }}
            >
              <h3 className="contact-card-title">📞 Call Us</h3>
              <p className="contact-card-text">+91 9891868928</p>
            </div>

            <div
              className="contact-card"
              style={{
                opacity: isVisible.contact ? 1 : 0,
                transform: isVisible.contact
                  ? "translateY(0)"
                  : "translateY(30px)",
                transition: "all 0.8s ease 0.4s",
              }}
            >
              <h3 className="contact-card-title">✉️ Email Us</h3>
              <p className="contact-card-text">
                <a href="mailto:sales@uventogenix.com">sales@uventogenix.com</a>
              </p>
            </div>

            <div
              className="contact-card"
              style={{
                opacity: isVisible.contact ? 1 : 0,
                transform: isVisible.contact
                  ? "translateY(0)"
                  : "translateY(30px)",
                transition: "all 0.8s ease 0.5s",
              }}
            >
              <h3 className="contact-card-title">🌐 Visit Us</h3>
              <p className="contact-card-text">www.uventogenix.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
