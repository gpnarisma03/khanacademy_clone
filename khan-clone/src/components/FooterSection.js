import React from "react";

function Footer() {
  return (
    <footer className="footer-section py-5">
      <div className="container">
        <div className="row g-4">
          {/* Column 1: Mission Statement */}
          <div className="col-md-3">
            <p className="fw-bold">
              Our mission is to provide a free, world-class education to anyone,
              anywhere.
            </p>
            <p className="text-white small">
              Khan Academy is a nonprofit organization. Donate or volunteer
              today!
            </p>
          </div>

          {/* Column 2: About Links */}
          <div className="col-md-3">
            <h5>About</h5>
            <ul className="list-unstyled">
              {[
                "News",
                "Impact",
                "Our team",
                "Our interns",
                "Our content specialists",
                "Our leadership",
                "Our supporters",
                "Our contributors",
                "Our finances",
                "Careers",
                "Internships",
                "Cookie Preferences",
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Links */}
          <div className="col-md-3">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              {[
                "Help center",
                "Support community",
                "Share your story",
                "Press",
                "Download our apps",
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Courses Links */}
          <div className="col-md-3">
            <h5>Courses</h5>
            <ul className="list-unstyled">
              {[
                "Math: Philippines",
                "PISA Philippines",
                "Science: Philippines",
                "TESDA: Philippines",
                "ALS: Philippines",
                "Math: U.S grades",
                "Math: Get ready courses",
                "Math: U.S. high school & college",
                "Test prep",
                "Khan for Educators",
                "Economics",
                "Science",
                "Computing",
                "Arts & humanities",
                "Reading & language arts",
                "Life skills",
                "Partner content",
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
