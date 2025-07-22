import React, { useState, useEffect } from "react";
import "./Clients.css";

const Clients = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const clients = [
    "Minda Corporation",
    "Addverb Technologies",
    "Sona BLW Precision Forgings",
    "Micron Instruments",
    "LNM Auto Industries",
  ];

  return (
    <div className="clients-page">
      <section className="clients-section">
        <div className="clients-container">
          <h2
            data-section="clients"
            className="animate-on-scroll clients-title"
            style={{
              opacity: isVisible.clients ? 1 : 0,
              transform: isVisible.clients
                ? "translateY(0)"
                : "translateY(30px)",
              transition: "all 0.8s ease",
            }}
          >
            Trusted by Industry Leaders
          </h2>

          <div className="clients-grid">
            {clients.map((client, index) => (
              <div
                key={index}
                className="client-card"
                style={{
                  opacity: isVisible.clients ? 1 : 0,
                  transform: isVisible.clients
                    ? "translateY(0)"
                    : "translateY(30px)",
                  transition: `all 0.8s ease ${index * 0.1}s`,
                }}
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
