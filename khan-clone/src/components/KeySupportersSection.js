import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function KeySupportersSection() {
  const supporters = [
    {
      src: "/assets/logos/bank-of-america-dark-gray@2x.png",
      alt: "Supporter 1",
    },
    { src: "/assets/logos/college-board-dark-gray@2x.png", alt: "Supporter 2" },
    {
      src: "/assets/logos/ann-and-john-doerr-dark-gray@2x.png",
      alt: "Supporter 3",
    },
    {
      src: "/assets/logos/gates-foundation-dark-gray@2x.png",
      alt: "Supporter 4",
    },
    {
      src: "/assets/logos/lemann-foundation-dark-gray@2x.png",
      alt: "Supporter 5",
    },
    {
      src: "/assets/logos/carlos-rodriguez-pastor-dark-gray@2x.png",
      alt: "Supporter 6",
    },
    { src: "/assets/logos/tata-trusts-dark-gray@2x.png", alt: "Supporter 7" },
    { src: "/assets/logos/valhalla-dark-gray@2x.png", alt: "Supporter 8" },
  ];

  return (
    <section className="key-supporters-section py-5 mt-5 text-center">
      <Container>
        <h2 className="mb-5">Key Supporters</h2>
        <Row className="g-4">
          {supporters.map((supporter, index) => (
            <Col
              key={index}
              xs={6}
              md={3}
              className="supporters-logo-container"
            >
              <img
                src={supporter.src}
                alt={supporter.alt}
                className="supporters-logo"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default KeySupportersSection;
