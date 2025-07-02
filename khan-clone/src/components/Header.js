import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const searchTrigger = document.getElementById("searchTrigger");
    const navbarWrapper = document.getElementById("navbarWrapper");
    const expandedSearch = document.getElementById("expandedSearch");
    const closeSearch = document.getElementById("closeSearch");

    const handleSearchOpen = () => {
      navbarWrapper.style.display = "none";
      expandedSearch.classList.add("show");
      expandedSearch.querySelector("input").focus();
    };

    const handleSearchClose = () => {
      expandedSearch.classList.remove("show");
      navbarWrapper.style.display = "flex";
    };

    searchTrigger?.addEventListener("click", handleSearchOpen);
    closeSearch?.addEventListener("click", handleSearchClose);

    return () => {
      searchTrigger?.removeEventListener("click", handleSearchOpen);
      closeSearch?.removeEventListener("click", handleSearchClose);
    };
  }, []);

  return (
    <header className="main-header">
      <div className="header-container mt-0">
        <nav className="main-nav">
          {/* Mobile Top Bar */}
          <div className="d-flex d-md-none justify-content-between align-items-center mb-2">
            {/* Brand Left */}
            <div className="d-flex align-items-center gap-2">
              <div className="brand-logo">
                <Link to="/">
                  <img
                    src="/assets/images/logo.png"
                    alt="Khan Academy logo"
                    className="logo"
                  />
                </Link>
              </div>
              <span className="brand-name">Khan Academy</span>
            </div>

            {/* Right: Hamburger + Search */}
            <div className="d-flex align-items-center gap-2">
              <button
                className="btn p-1"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
              >
                <i className="bi bi-list fs-4"></i>
              </button>
              <div
                className="search-box"
                id="searchTrigger"
                style={{ cursor: "pointer" }}
              >
                <i className="bi bi-search fs-5"></i>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="nav-content d-none d-md-flex" id="navbarWrapper">
            {/* Left: Explore + Search */}
            <div className="nav-left">
              <div className="dropdown">
                <button
                  className="btn btn-sm btn-outline-secondary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  Explore
                </button>
                <ul className="dropdown-menu custom-dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/math">
                      Math
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/science">
                      Science
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="search-box" id="searchTrigger">
                <i className="bi bi-search"></i>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Search"
                  readOnly
                />
              </div>
            </div>

            {/* Center: Brand */}
            <div className="brand d-flex justify-content-center align-items-center">
              <div className="brand-logo">
                <Link to="/">
                  <img
                    src="/assets/images/logo.png"
                    alt="Khan Academy logo"
                    className="logo"
                  />
                </Link>
              </div>
              <span className="brand-name">Khan Academy</span>
            </div>

            {/* Right: CTA Buttons */}
            <div className="nav-right">
              <a
                href="https://donate.khanacademy.org"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-donate"
              >
                Donate <i className="bi bi-box-arrow-up-right"></i>
              </a>
              <Link to="/login" className="btn-login">
                Log in
              </Link>
              <Link to="/signup" className="btn-signup shared-css">
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Menu Content */}
          {isMobileMenuOpen && (
            <div className="mobile-nav d-md-none mt-3">
              <ul className="list-unstyled mb-0">
                <li>
                  <Link to="/login" className="btn btn-link w-100">
                    Log in
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="btn btn-link w-100">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <a
                    href="https://donate.khanacademy.org"
                    className="btn btn-link w-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Donate
                  </a>
                </li>
              </ul>
            </div>
          )}

          {/* Expanded Search */}
          <div className="expanded-search mb-1" id="expandedSearch">
            <button
              id="closeSearch"
              className="btn btn-link text-decoration-none"
            >
              <i className="bi bi-x-lg"></i>
            </button>
            <div className="search-wrapper">
              <i className="bi bi-search"></i>
              <input
                type="text"
                className="form-control"
                placeholder="Search for courses, skills and videos"
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
