import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../components/Styles/ContactUs.css';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Implement your contact form submission logic here
    // For example, you can make an API call or send an email

    if (name && email && message) {
      // If the form is submitted successfully
      setShowSuccessAlert(true);
      setShowErrorAlert(false);
      setName('');
      setEmail('');
      setMessage('');
    } else {
      // If the form is not filled out correctly
      setShowErrorAlert(true);
      setShowSuccessAlert(false);
    }
  };

  return (
    <div className="contact-us-page">
      <div className="contact-us-hero">
        <Container>
          <h1 className="contact-us-title">Get in Touch</h1>
          <p className="contact-us-subtitle">
            Have a question or want to collaborate? We'd love to hear from you!
          </p>
        </Container>
      </div>
      <Container className="contact-us-content">
        <Row>
          <Col md={6}>
            <div className="contact-us-info">
              <div className="contact-us-info-item">
                <div className="contact-us-info-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h3>Email</h3>
                  <p>support@unrealforge.com</p>
                </div>
              </div>
              <div className="contact-us-info-item">
                <div className="contact-us-info-icon">
                  <FaPhone />
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>+973 (052) 580-3595</p>
                </div>
              </div>
              <div className="contact-us-info-item">
                <div className="contact-us-info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3>Address</h3>
                  <p>123 Herzl Street, Tel-Aviv ISR</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <Form onSubmit={handleSubmit} className="contact-us-form">
              <Form.Group controlId="name" className="mb-4">
                <Form.Label className="form-label">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </Form.Group>
              <Form.Group controlId="email" className="mb-4">
                <Form.Label className="form-label">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
              </Form.Group>
              <Form.Group controlId="message" className="mb-4">
                <Form.Label className="form-label">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-control"
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="contact-us-submit-btn">
                Submit
              </Button>
              {showSuccessAlert && (
                <Alert variant="success" className="mt-3">
                  Message sent successfully!
                </Alert>
              )}
              {showErrorAlert && (
                <Alert variant="danger" className="mt-3">
                  Please fill out all the fields.
                </Alert>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUs;