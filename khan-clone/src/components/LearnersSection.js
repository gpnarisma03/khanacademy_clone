import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function LearnersSection() {
  return (
    <section className="learners-section p-5">
      <Container>
        <Row className="align-items-center">
          {/* Text Column */}
          <Col md={6}>
            <p className="lead">LEARNERS AND STUDENTS</p>
            <h2>
              You can learn <br /> anything.
            </h2>

            <p>
              Build a deep, solid understanding in math, science, and <br />{" "}
              more.
            </p>
            <Button
              variant="primary"
              className="custom-learners-button shared-css"
            >
              Start learning
            </Button>
          </Col>

          {/* Image Column */}
          <Col md={6}>
            <img
              src="/assets/images/laptop_collage@2x.png"
              alt="Learners Image"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default LearnersSection;
