
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link,  } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa';
import './components/Styles/App.css';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import Payment from './components/Payment';
import UserPage from './components/UserPage';



function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (course) => {
    setCartItems((prevCartItems) => [...prevCartItems, course]);
  };

  const removeFromCart = (index) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = [...prevCartItems];
      updatedCartItems.splice(index, 1);
      return updatedCartItems;
    });
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar expand="lg" variant="dark" sticky="top" className="navbar-container">
          <Container fluid>
            <Navbar.Brand as={Link} to="/" className="logo">
              <img src="https://www.svgrepo.com/show/394536/unreal-engine.svg" alt="Logo" className="logo-image" />
              <span className="logo-text">UnrealForge</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" className="nav-link">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about" className="nav-link">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/courses" className="nav-link">
                  Courses
                </Nav.Link>
              </Nav>
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/login" className="nav-link">
                  <FaUserCircle className="icon" />
                  <span>Login</span>
                </Nav.Link>
                <Nav.Link as={Link} to="/register" className="nav-link">
                  <span>Register</span>
                </Nav.Link>
                <Nav.Link as={Link} to="/connectus" className="nav-link">
                  <span>ContactUs</span>
                </Nav.Link>
                <Nav.Link as={Link} to="/cart" className="nav-link">
                  <FaShoppingCart className="icon" />
                  <span>Cart</span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses addToCart={addToCart} />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/connectus" element={<ContactUs />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;