import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function DonateSection() {
  return (
    <section className="cta-donate-section py-5">
      <Container>
        <Row className="align-items-center g-5">
          {/* Image Column */}
          <Col md={6}>
            <img
              src="/assets/images/math-unicorn-donate-collage.png"
              alt="Make a Difference Image"
              className="img-fluid"
            />
          </Col>

          {/* Text Column */}
          <Col md={6}>
            <p className="lead">TOGETHER WE CAN MAKE A DIFFERENCE</p>
            <h2 className="mb-3">
              Every child deserves <br />
              the chance to learn.
            </h2>

            <p>
              Across the globe, 617 million children are missing basic <br />{" "}
              math and reading skills. We’re a nonprofit delivering the <br />
              education they need, and we need your help. You can <br />
              change the course of a child’s life.
            </p>
            <Button className="mt-3 cta-button shared-css">
              Give them the chance
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default DonateSection;
