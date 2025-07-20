import React, { useState, useEffect } from "react";
// import "./Industries.css";
import "./Industry.css";

const Industries = () => {
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

    const element = document.getElementById("industries-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const industries = [
    {
      name: "Automotive",
      icon: "🚗",
      className: "automotive",
      description: "Advanced automotive solutions",
    },
    {
      name: "General Engineering",
      icon: "⚙️",
      className: "engineering",
      description: "Comprehensive engineering services",
    },
    {
      name: "Defense",
      icon: "🛡️",
      className: "defense",
      description: "Defense sector expertise",
    },
    {
      name: "Aerospace",
      icon: "✈️",
      className: "aerospace",
      description: "Aerospace industry solutions",
    },
    {
      name: "Die & Mould",
      icon: "🔩",
      className: "die-mould",
      description: "Precision die & mould services",
    },
    {
      name: "Tool Rooms",
      icon: "🔨",
      className: "tool-rooms",
      description: "Professional tool room services",
    },
  ];

  return (
    <section id="industries-section" className="industries">
      <div className="industries-container">
        {/* Header Section */}
        <div className="industries-header">
          <span className={`industries-badge ${isVisible ? "animate-in" : ""}`}>
            Industries We Serve
          </span>
          <h2 className={`industries-title ${isVisible ? "animate-in" : ""}`}>
            Powering Innovation Across{" "}
            <span className="gradient-text">Industries</span>
          </h2>
          <p className={`industries-subtitle ${isVisible ? "animate-in" : ""}`}>
            We deliver cutting-edge engineering solutions that drive operational
            excellence across diverse sectors
          </p>
        </div>

        {/* Industries Grid */}
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`industry-card ${industry.className} ${
                isVisible ? "animate-in" : ""
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="icon-container">
                <span className="industry-icon">{industry.icon}</span>
              </div>
              <h3 className="industry-name">{industry.name}</h3>
              <p className="industry-description">{industry.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`industries-cta ${isVisible ? "animate-in" : ""}`}>
          <h3 className="cta-title">Ready to Transform Your Industry?</h3>
          <p className="cta-description">
            Partner with us to unlock new possibilities and drive innovation in
            your sector
          </p>
          <button className="cta-button">
            <span>Get Started</span>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Industries;
