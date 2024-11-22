import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white py-4">
        <Container>
          <Row className="py-4">
            <Col md={4} className="mb-3">
              <h3 className="fw-bold">Recipe: Get Ready</h3>
              <p>
                Discover the best recipes, cooking tips, and meal ideas. Your
                journey to delightful meals starts here!
              </p>
            </Col>
            <Col md={4} className="mb-3">
              <h5 className="fw-bolder">Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/about" className="text-white text-decoration-none">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-white text-decoration-none"
                  >
                    Recipes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-white text-decoration-none"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-white text-decoration-none">
                    Blog
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md={4} className="mb-3">
              <h5>Follow Us</h5>
              <div>
                <a
                  href="https://facebook.com"
                  className="text-white me-3 text-decoration-none"
                >
                  <i className="bi bi-facebook"></i> Facebook
                </a>
                <a
                  href="https://instagram.com"
                  className="text-white me-3 text-decoration-none"
                >
                  <i className="bi bi-instagram"></i> Instagram
                </a>
                <a
                  href="https://twitter.com"
                  className="text-white text-decoration-none"
                >
                  <i className="bi bi-twitter"></i> Twitter
                </a>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="text-center">
              <p className="mb-0">
                &copy; {new Date().getFullYear()} Recipe: Get Ready. All rights
                reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
