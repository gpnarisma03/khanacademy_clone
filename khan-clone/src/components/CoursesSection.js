import React from "react";
import { Accordion, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

// Data for dynamic rendering
const mathCourses = [
  [
    "Pre-K through grade 2 (Khan Kids)",
    "Early math review",
    "2nd grade",
    "3rd grade",
    "4th grade",
  ],
  [
    "5th grade",
    "6th grade",
    "7th grade",
    "8th grade",
    { label: "See Pre-K - 8th Math", bold: true },
  ],
];

const economicsCourses = [
  ["Macroeconomics", "AP®︎/College Macroeconomics", "Microeconomics"],
  ["AP®︎/College Microeconomics", { label: "See all Economics", bold: true }],
];

function renderCourseList(columns) {
  return columns.map((column, colIdx) => (
    <Col md={6} key={colIdx}>
      <ul className="list-unstyled mb-0">
        {column.map((item, idx) => {
          const text = typeof item === "string" ? item : item.label;
          const isBold = typeof item === "object" && item.bold;
          return (
            <li key={idx}>
              <Link to="#" className={isBold ? "fw-bold" : ""}>
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </Col>
  ));
}

function CoursesSection() {
  return (
    <section className="courses-section">
      <Container>
        <Row className="g-4">
          {/*  Math */}
          <Col md={6}>
            <Accordion defaultActiveKey="0" id="accordionLeft">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <span>
                    <img
                      className="course-img"
                      src="/assets/icons/math.png-444b34-128c.png"
                      alt="Math Icon"
                    />
                    Math: US Grades
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>{renderCourseList(mathCourses)}</Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>

          {/* Economics */}
          <Col md={6}>
            <Accordion id="accordionRight">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <span>
                    <img
                      className="course-img"
                      src="/assets/icons/economics_finance.png-55daed-128c.png"
                      alt="Economics Icon"
                    />
                    Economics
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>{renderCourseList(economicsCourses)}</Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CoursesSection;
