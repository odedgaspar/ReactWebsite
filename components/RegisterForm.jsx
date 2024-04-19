import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { FaEnvelope, FaLock, FaUserCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { app } from '../firbaseAt';
import '../components/Styles/RegisterForm.css';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (email && password && confirmPassword && agreeTerms) {
      if (password !== confirmPassword) {
        setShowAlert(true);
        return;
      }

      try {
        const auth = getAuth(app);
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Store user data in Firestore
        const firestore = getFirestore(app);
        await setDoc(doc(firestore, 'users', user.uid), {
          email: user.email,
          // Add any other user data you want to store
        });

        console.log('User registered successfully');
        navigate('/login');
      } catch (error) {
        console.error('Registration error:', error.message);
      }
    } else {
      setShowAlert(true);
    }
  };


  return (
    <div className="register-page-container">
      <Container className="d-flex justify-content-center align-items-center vh-100 register-form-container">
        <div className="register-form-wrapper">
          <div className="register-form-header">
            <FaUserCheck className="register-form-icon" />
            <h2 className="register-form-title">Create Your Account</h2>
            <p className="register-form-subtitle">
              Already have an account?{' '}
              <a href="/login" className="login-link">
                Log In
              </a>
            </p>
          </div>
          <Form onSubmit={handleRegister} className="register-form">
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
            <Form.Group controlId="confirmPassword" className="mb-4 form-group">
              <Form.Label className="form-label">
                <FaLock className="form-icon" /> Confirm Password
              </Form.Label>
              <div className="input-group">
                <span className="input-group-text form-icon">
                  <FaLock />
                </span>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="form-control"
                />
              </div>
            </Form.Group>
            <Form.Group controlId="agreeTerms" className="mb-4 form-group">
              <Form.Check
                type="checkbox"
                label="I agree to the Terms of Service and Privacy Policy"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="form-check"
              />
            </Form.Group>
            {showAlert && (
              <Alert variant="danger" className="mb-4">
                Please fill out all fields and agree to the terms and services
              </Alert>
            )}
            <div className="d-grid">
              <Button variant="primary" type="submit" className="register-btn">
                Sign Up
              </Button>
            </div>
          </Form>
        </div>
      </Container>
      <div className="register-page-overlay"></div>
    </div>
  );
};

export default RegisterForm;