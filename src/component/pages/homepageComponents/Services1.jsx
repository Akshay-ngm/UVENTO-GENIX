import React, { useState, useEffect } from "react";
import styles from "./Services.module.css";

const Services = () => {
  const [isVisible, setIsVisible] = useState(true); // Start with true for immediate visibility

  useEffect(() => {
    // Debug: Check if styles are loading
    console.log("CSS Modules styles:", styles);

    // Simple timeout fallback to ensure animation triggers
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Element is visible");
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

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
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

  // Inline styles as fallback if CSS Modules isn't working
  const fallbackStyles = {
    services: {
      padding: "20px",
      background:
        "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
      color: "white",
      position: "relative",
      overflow: "hidden",
      minHeight: "100vh",
    },
    servicesContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      textAlign: "center",
      position: "relative",
      zIndex: 2,
    },
    servicesTitle: {
      fontSize: "2.5rem",
      fontWeight: 700,
      marginBottom: "40px",
      position: "relative",
    },
    servicesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
      gap: "40px",
    },
    serviceCard: {
      background: "rgba(255, 255, 255, 0.05)",
      padding: "30px 25px",
      borderRadius: "16px",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(10px)",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    serviceIcon: {
      fontSize: "2.8rem",
      marginBottom: "20px",
      display: "block",
    },
    serviceTitle: {
      fontSize: "1.4rem",
      fontWeight: 600,
      marginBottom: "15px",
      color: "white",
    },
    serviceDescription: {
      color: "#cbd5e1",
      lineHeight: 1.6,
      fontSize: "1rem",
    },
  };

  return (
    <section
      id="services-section"
      className={styles.services || ""}
      style={!styles.services ? fallbackStyles.services : {}}
    >
      <div
        className={styles.servicesContainer || ""}
        style={
          !styles.servicesContainer ? fallbackStyles.servicesContainer : {}
        }
      >
        <h2
          className={`${styles.servicesTitle || ""} ${
            isVisible && styles.animateIn ? styles.animateIn : ""
          }`}
          style={!styles.servicesTitle ? fallbackStyles.servicesTitle : {}}
        >
          Our Services
        </h2>

        <div
          className={styles.servicesGrid || ""}
          style={!styles.servicesGrid ? fallbackStyles.servicesGrid : {}}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles.serviceCard || ""} ${
                isVisible && styles.animateIn ? styles.animateIn : ""
              }`}
              style={{
                ...(styles.serviceCard ? {} : fallbackStyles.serviceCard),
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div
                className={styles.serviceIcon || ""}
                style={!styles.serviceIcon ? fallbackStyles.serviceIcon : {}}
              >
                {service.icon}
              </div>
              <h3
                className={styles.serviceTitle || ""}
                style={!styles.serviceTitle ? fallbackStyles.serviceTitle : {}}
              >
                {service.title}
              </h3>
              <p
                className={styles.serviceDescription || ""}
                style={
                  !styles.serviceDescription
                    ? fallbackStyles.serviceDescription
                    : {}
                }
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
