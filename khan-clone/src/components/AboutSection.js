import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function AboutSection() {
  return (
    <section className="why-khan-section py-5">
      <Container className="text-center">
        <h2 className="mb-5">Why Khan Academy works?</h2>
        <Row className="g-4">
          {/* Personalized Learning */}
          <Col
            md={4}
            className="d-flex align-items-center flex-column justify-content-center"
          >
            <div className="why-khan-section-image-container">
              <img
                src="/assets/icons/personalized_learning_icon.png"
                alt="Personalized Learning Icon"
              />
            </div>
            <h5>Personalized Learning</h5>
            <span>
              Students practice at their own pace, first filling in gaps in
              their understanding and then accelerating their learning.
            </span>
          </Col>

          {/* Trusted Content */}
          <Col
            md={4}
            className="d-flex align-items-center flex-column justify-content-center"
          >
            <div className="why-khan-section-image-container">
              <img
                src="/assets/icons/trusted_content_icon.png"
                alt="Trusted Content Icon"
                className="mb-3"
                width="80"
              />
            </div>
            <h5>Trusted Content</h5>
            <span>
              Created by experts, Khan Academy’s library of trusted practice and
              lessons covers math, science, and more. Always free for learners
              and teachers.
            </span>
          </Col>

          {/* Tools to empower teachers */}
          <Col
            md={4}
            className="d-flex align-items-center flex-column justify-content-center"
          >
            <div className="why-khan-section-image-container">
              <img
                src="/assets/icons/empower_teachers_icon.png"
                alt="Tools for Teachers Icon"
                className="mb-3"
                width="80"
              />
            </div>
            <h5>Tools to empower teachers</h5>
            <span>
              With Khan Academy, teachers can identify gaps in their students’
              understanding, tailor instruction, and meet the needs of every
              student.
            </span>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;
