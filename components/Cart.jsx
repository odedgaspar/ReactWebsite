import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { FaShoppingCart, FaTrashAlt } from 'react-icons/fa';
import { CartContext } from './CartContext';
import './Styles/Cart.css';

function Cart() {
  const { cartItems, removeFromCart, saveCartToDatabase } = useContext(CartContext);
  const navigate = useNavigate();

  const handleRemoveFromCart = (index) => {
    removeFromCart(index);
  };

  const handlePayment = async () => {
    await saveCartToDatabase();
    navigate('/payment');
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <Container className="cart-container">
      <h2 className="mb-4">
        <FaShoppingCart /> Shopping Cart
      </h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <Card key={index} className="mb-3 cart-item">
              <Card.Body>
                <Row className="align-items-center">
                  <Col xs={3} md={2} className="item-image">
                    <img src={item.thumbnailUrl} alt={item.title} />
                  </Col>
                  <Col xs={6} md={7} className="item-details">
                    <h3>{item.title}</h3>
                    <p>Price: ${item.price}</p>
                  </Col>
                  <Col xs={3} md={3} className="text-end">
                    <Button
                      variant="danger"
                      onClick={() => handleRemoveFromCart(index)}
                      className="remove-btn"
                    >
                      <FaTrashAlt />
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
      <div className="cart-summary">
        <p className="total-price">Total: ${calculateTotalPrice()}</p>
        <Button variant="primary" onClick={handlePayment} className="payment-btn">
          Proceed to Payment
        </Button>
      </div>
    </Container>
  );
}

export default Cart;