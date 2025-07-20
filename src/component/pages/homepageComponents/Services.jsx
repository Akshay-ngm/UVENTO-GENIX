import React, { useState, useEffect } from "react";
import "./Services.css";

const Services = () => {
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

    const element = document.getElementById("services-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: "⚡",
      title: "Servo Stabilizers",
      description:
        "High-performance voltage stabilization solutions for industrial applications",
    },
    {
      icon: "🔋",
      title: "Online UPS Systems",
      description:
        "Reliable uninterruptible power supply systems for critical operations",
    },
    {
      icon: "🔧",
      title: "Isolation Transformers",
      description:
        "Premium isolation transformers for electrical safety and efficiency",
    },
    {
      icon: "🛠️",
      title: "Cutting Tools",
      description:
        "Precision cutting tools for automotive and engineering applications",
    },
    {
      icon: "💨",
      title: "Mist Collectors",
      description:
        "Industrial mist collection systems for cleaner work environments",
    },
    {
      icon: "📡",
      title: "IoT Solutions",
      description:
        "Smart industrial IoT solutions for modern manufacturing processes",
    },
  ];

  return (
    <section id="services-section" className="services">
      <div className="services-container">
        <h2 className={`services-title ${isVisible ? "animate-in" : ""}`}>
          Our Services
        </h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${isVisible ? "animate-in" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
