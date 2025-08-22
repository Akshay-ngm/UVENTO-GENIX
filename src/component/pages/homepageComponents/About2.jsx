import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Uvento Genix</h1>
        <p>
          At <strong>Uvento Genix</strong>, we specialize in delivering
          high-quality industrial and engineering products that empower
          businesses across India to achieve operational excellence. With a
          strong commitment to{" "}
          <strong>precision, innovation, and customer satisfaction</strong>, we
          provide a comprehensive range of solutions designed to meet the
          diverse needs of modern industries.
        </p>
      </section>

      {/* Company Story */}
      <section className="about-story">
        <h2>Who We Are</h2>
        <p>
          Founded on the principles of{" "}
          <strong>quality, integrity, and partnership</strong>, Uvento Genix is
          dedicated to helping clients overcome engineering challenges with
          tailored solutions. Our expert team works closely with you to
          understand your requirements and deliver products that enhance{" "}
          <strong>efficiency, safety, and performance</strong>.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission-vision">
        <div className="about-card">
          <h3>Our Mission</h3>
          <p>
            “At Uvento Genix, our mission is to drive the future of smart and
            sustainable manufacturing by delivering cutting-edge{" "}
            <strong>
              Industry 4.0 solutions, reliable power management systems,
              precision cutting tools, and advanced air purification
              technologies such as Oil Mist Collectors
            </strong>
            . We are committed to enhancing{" "}
            <strong>
              efficiency, safety, and environmental responsibility
            </strong>{" "}
            across industrial operations through innovation, quality, and
            customer-centric service.”
          </p>
        </div>
        <div className="about-card">
          <h3>Our Vision</h3>
          <p>
            “To be India’s most trusted partner in industrial innovation by
            delivering world-class{" "}
            <strong>
              Industry 4.0 solutions, precision cutting tools, clean air
              systems, and reliable power infrastructure
            </strong>{" "}
            that strengthens the backbone of Indian manufacturing.”
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-why">
        <h2>Why Choose Us?</h2>
        <div className="why-grid">
          <div className="why-item">
            <h4>Trusted Expertise</h4>
            <p>A team of professionals with deep industry knowledge.</p>
          </div>
          <div className="why-item">
            <h4>Innovative Solutions</h4>
            <p>Leveraging the latest Industry 4.0 technologies.</p>
          </div>
          <div className="why-item">
            <h4>Sustainability Focus</h4>
            <p>Prioritizing safety, efficiency, and eco-friendly practices.</p>
          </div>
          <div className="why-item">
            <h4>Customer-Centric Approach</h4>
            <p>Tailored solutions to match your unique needs.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
