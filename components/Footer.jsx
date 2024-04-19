import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaSquareXTwitter , FaInstagram, FaYoutube } from 'react-icons/fa6';
import '../components/Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="footer-content text-center">
              <div className="social-icons mb-4">
                <a
                  href="#!"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#!"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareXTwitter  />
                </a>
                <a
                  href="#!"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#!"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
              </div>
              <div className="footer-brand">
                <img
                  src="https://www.svgrepo.com/show/394536/unreal-engine.svg"
                  alt="UnrealForge"
                  className="footer-logo"
                />
                <h3 className="footer-title">UnrealForge</h3>
              </div>
              <p className="footer-text">
                © {new Date().getFullYear()} UnrealForge. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;