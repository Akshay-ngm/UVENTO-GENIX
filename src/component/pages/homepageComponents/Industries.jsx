import React, { useState, useEffect } from "react";
import "./Industries.css";

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
    { name: "Automotive", icon: "🚗" },
    { name: "General Engineering", icon: "⚙️" },
    { name: "Defense", icon: "🛡️" },
    { name: "Aerospace", icon: "✈️" },
    {
      name: "Die & Mould",
      icon: "🔩",
      bgImage: "/images/screw.jpg",
    },
    { name: "Tool Rooms", icon: "🔨" },
  ];

  return (
    <section id="industries-section" className="industries">
      <div className="industries-container">
        <h2 className={`industries-title ${isVisible ? "animate-in" : ""}`}>
          Industries We Serve
        </h2>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`industry-card ${isVisible ? "animate-in" : ""}`}
              style={{
                animationDelay: `${index * 0.1}s`,
                // backgroundImage: `url(${industry.bgImage})`,
                // backgroundSize: "cover",
                // backgroundPosition: "center",
                // backgroundRepeat: "no-repeat",
              }}
            >
              <div className="industry-icon">{industry.icon}</div>
              <h3 className="industry-name">{industry.name}</h3>
            </div>
          ))}
        </div>

        <div
          className={`industries-description ${
            isVisible ? "animate-in delay-6" : ""
          }`}
        >
          <p>
            We proudly serve diverse industries with our innovative engineering
            solutions, helping businesses across sectors achieve operational
            excellence and enhanced productivity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Industries;
