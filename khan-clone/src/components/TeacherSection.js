import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function TeachersSection() {
  return (
    <section className="teachers-section py-5">
      <Container>
        <Row className="align-items-center g-5">
          {/* Image Column */}
          <Col md={6}>
            <img
              src="/assets/images/faces_collage_2@2x.png"
              alt="Teachers Image"
              className="img-fluid"
            />
          </Col>

          {/* Text Column */}
          <Col md={6}>
            <h3>TEACHERS</h3>
            <p className="lead">
              Differentiate your classroom and engage every student.
            </p>
            <span>
              We empower teachers to support their entire classroom. 90% of US
              teachers who have used Khan Academy have found us effective.
            </span>
            <br />
            <Button
              variant="primary"
              className="custom-teacher-button mt-3 shared-css custom-shared-css"
            >
              Teachers, start here
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TeachersSection;
