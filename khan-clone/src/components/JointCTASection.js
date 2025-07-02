import React from "react";
import { Container, Button } from "react-bootstrap";

function JoinCTASection() {
  return (
    <section className="join-cta-section py-5 mb-5 text-center">
      <Container>
        <h2 className="mb-4">Join Khan Academy today</h2>
        <div className="d-flex flex-column align-items-center gap-3">
          <Button
            variant="primary"
            size="lg"
            className="shared-css"
            style={{ width: "250px" }}
          >
            Learners
          </Button>
          <Button
            variant="primary"
            size="lg"
            className="shared-css"
            style={{ width: "250px" }}
          >
            Teachers
          </Button>
          <Button
            variant="primary"
            size="lg"
            className="shared-css"
            style={{ width: "250px" }}
          >
            Parents
          </Button>
          <Button
            variant="primary"
            size="lg"
            className="shared-css"
            style={{ width: "250px" }}
          >
            Give Today
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default JoinCTASection;
