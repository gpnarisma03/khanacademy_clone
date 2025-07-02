import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function TestimonialSection() {
  return (
    <section className="testimonial-section py-5">
      <Container>
        {/* Testimonial Text */}
        <Row className="mb-4">
          <Col>
            <blockquote className="blockquote text-center">
              <p>
                “I come from a poor family. At home it’s one room, just a room
                we live in. When I was a child, I used to fear mathematics. But
                now, I am in love with mathematics because of Khan Academy.”
              </p>
            </blockquote>
          </Col>
        </Row>

        {/* Author Info */}
        <Row className="px-5">
          <Col className="d-flex justify-content-end align-items-center gap-4">
            <footer className="blockquote-footer text-end mb-0">
              <strong>ANJALI</strong>
              <br />
              <small>India</small>
            </footer>
            <img
              src="/assets/images/anjali-3.png"
              alt="Anjali from India"
              className="img-fluid rounded-circle"
              style={{ width: "130px", height: "130px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TestimonialSection;
