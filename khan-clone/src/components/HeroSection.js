import React from "react";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Left Column: Image */}
        <div className="hero-image">
          <img
            src="/assets/images/hero_student_collage_US_1x.png"
            alt="Students Collage"
          />
        </div>

        {/* Right Column: Text Content */}
        <div className="hero-text">
          <div className="hero-heading">
            <h1>
              For every student,
              <br />
              every classroom.
              <br />
              <span className="highlight">Real results.</span>
            </h1>
          </div>

          <div className="hero-description">
            <p>
              We’re a nonprofit with the mission to provide a free, world-class
              education for anyone, anywhere.
            </p>
          </div>

          <div className="hero-buttons">
            <button className="btn-hero shared-css">Learners</button>
            <button className="btn-hero shared-css">Teachers</button>
            <button className="btn-hero shared-css">Parents</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
