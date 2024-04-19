import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaCreditCard, FaMoneyBillAlt, FaLock, FaRegCreditCard, FaRegMoneyBillAlt, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../components/Styles/Payment.css';

function Payment() {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [name, setName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Implement your payment processing logic here
    // For example, you can make an API call to a payment gateway

    if (cardNumber && expirationDate && cvv && name) {
      // If the payment is processed successfully
      setShowSuccessAlert(true);
      setShowErrorAlert(false);
      setCardNumber('');
      setExpirationDate('');
      setCVV('');
      setName('');
      // Redirect the user to the home page or any other desired page
      navigate('/');
    } else {
      // If the payment form is not filled out correctly
      setShowErrorAlert(true);
      setShowSuccessAlert(false);
    }
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const getCardIcon = () => {
    // Check the card number and return the corresponding card icon
    if (cardNumber.startsWith('4')) {
      return <FaCcVisa className="card-icon" />;
    } else if (cardNumber.startsWith('5')) {
      return <FaCcMastercard className="card-icon" />;
    } else if (cardNumber.startsWith('34') || cardNumber.startsWith('37')) {
      return <FaCcAmex className="card-icon" />;
    } else if (cardNumber.startsWith('6')) {
      return <FaCcDiscover className="card-icon" />;
    } else {
      return <FaCreditCard className="card-icon" />;
    }
  };

  return (
    <div className="payment-page">
      <div className="payment-hero">
        <Container>
          <h1 className="payment-title">Secure Payment</h1>
          <p className="payment-subtitle">
            Complete your purchase with confidence using our secure payment gateway.
          </p>
        </Container>
      </div>
      <Container className="payment-form-container">
        <Row>
          <Col md={6}>
            <div className="payment-form">
              <div className="payment-method-selector">
                <button
                  className={`payment-method-btn ${paymentMethod === 'credit-card' ? 'active' : ''}`}
                  onClick={() => handlePaymentMethodChange('credit-card')}
                >
                  <FaRegCreditCard className="payment-method-icon" /> Credit Card
                </button>
                <button
                  className={`payment-method-btn ${paymentMethod === 'debit-card' ? 'active' : ''}`}
                  onClick={() => handlePaymentMethodChange('debit-card')}
                >
                  <FaRegMoneyBillAlt className="payment-method-icon" /> Debit Card
                </button>
                <button
                  className={`payment-method-btn ${paymentMethod === 'bank-transfer' ? 'active' : ''}`}
                  onClick={() => handlePaymentMethodChange('bank-transfer')}
                >
                  <FaRegMoneyBillAlt className="payment-method-icon" /> Bank Transfer
                </button>
              </div>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="cardNumber" className="mb-4">
                  <Form.Label className="form-label">
                    {getCardIcon()}
                    Card Number
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your card number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="form-control"
                  />
                </Form.Group>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="expirationDate" className="mb-4">
                      <Form.Label className="form-label">
                        <FaMoneyBillAlt className="form-icon" /> Expiration Date
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="MM/YY"
                        value={expirationDate}
                        onChange={(e) => setExpirationDate(e.target.value)}
                        className="form-control"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="cvv" className="mb-4">
                      <Form.Label className="form-label">
                        <FaLock className="form-icon" /> CVV
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="CVV"
                        value={cvv}
                        onChange={(e) => setCVV(e.target.value)}
                        className="form-control"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="name" className="mb-4">
                  <Form.Label className="form-label">
                    <FaCreditCard className="form-icon" /> Cardholder Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the name on your card"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="payment-submit-btn">
                  Complete Payment
                </Button>
                {showSuccessAlert && (
                  <Alert variant="success" className="mt-3">
                    Payment successful!
                  </Alert>
                )}
                {showErrorAlert && (
                  <Alert variant="danger" className="mt-3">
                    Please fill out all the fields correctly.
                  </Alert>
                )}
              </Form>
            </div>
          </Col>
          <Col md={6}>
            <div className="payment-info">
              <h2 className="payment-info-title">Payment Information</h2>
              <p>
                We use a secure payment gateway to ensure the safety and privacy of your financial information. Your
                personal data is protected and will not be shared with any third parties.
              </p>
              <p>
                By completing this payment, you agree to our <a href="#!">Terms of Service</a> and{' '}
                <a href="#!">Privacy Policy</a>.
              </p>
              <div className="payment-info-icons">
                <div className="payment-info-icon-wrapper">
                  <FaCreditCard className="payment-info-icon" />
                  <span>Secure Payment</span>
                </div>
                <div className="payment-info-icon-wrapper">
                  <FaMoneyBillAlt className="payment-info-icon" />
                  <span>Encrypted Data</span>
                </div>
                <div className="payment-info-icon-wrapper">
                  <FaLock className="payment-info-icon" />
                  <span>Privacy Protected</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Payment;