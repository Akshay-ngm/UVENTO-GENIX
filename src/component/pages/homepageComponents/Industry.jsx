import React, { useState, useEffect } from "react";
// import "./Industries.css";
// import "./Industry.css";
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
          <p className={`industries-title ${isVisible ? "animate-in" : ""}`}>
            Powering Innovation Across Industries
          </p>
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
      </div>
    </section>
  );
};

export default Industries;
