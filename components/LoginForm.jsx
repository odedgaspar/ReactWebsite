import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firbaseAt';
import '../components/Styles/LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('User logged in:', user);
          navigate('/user');
        })
        .catch((error) => {
          console.error('Sign-in error:', error.message);
          setShowAlert(true);
        });
    } else {
      setShowAlert(true);
    }
  };

  return (
    <div className="login-page-container">
      <Container className="d-flex justify-content-center align-items-center vh-100 login-form-container">
        <div className="login-form-wrapper">
          <div className="login-form-header">
            <FaSignInAlt className="login-form-icon" />
            <h2 className="login-form-title">Welcome Back</h2>
            <p className="login-form-subtitle">
              Don't have an account?{' '}
              <a href="/register" className="signup-link">
                Sign Up
              </a>
            </p>
          </div>
          <Form onSubmit={handleSubmit} className="login-form">
            <Form.Group controlId="email" className="mb-4 form-group">
              <Form.Label className="form-label">
                <FaEnvelope className="form-icon" /> Email Address
              </Form.Label>
              <div className="input-group">
                <span className="input-group-text form-icon">
                  <FaEnvelope />
                </span>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
              </div>
            </Form.Group>
            <Form.Group controlId="password" className="mb-4 form-group">
              <Form.Label className="form-label">
                <FaLock className="form-icon" /> Password
              </Form.Label>
              <div className="input-group">
                <span className="input-group-text form-icon">
                  <FaLock />
                </span>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                />
              </div>
            </Form.Group>
            {showAlert && (
              <Alert variant="danger" className="mb-4">
                Please enter both email and password
              </Alert>
            )}
            <div className="d-grid">
              <Button variant="primary" type="submit" className="login-btn">
                Sign In
              </Button>
            </div>
          </Form>
        </div>
      </Container>
      <div className="login-page-overlay"></div>
    </div>
  );
};

export default LoginForm;