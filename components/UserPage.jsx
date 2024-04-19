import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaUserCircle, FaEnvelope, FaMapMarkerAlt, FaUserEdit, FaEdit, FaBook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firbaseAt';
import '../components/Styles/UserPage.css';
import { firestore } from '../firbaseAt';

function UserPage() {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = auth.currentUser;
        if (currentUser) {
          const email = currentUser.email;
          const username = email.split('@')[0];
          setUser({ email: email, displayName: username });
          setVisitCount((prevCount) => prevCount + 1);
          fetchCartItems(currentUser.uid); // Fetch cart items when user is authenticated
        } else {
          console.error('Current user not found');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);

  const fetchCartItems = async (userId) => {
    try {
      const userCartRef = firestore.collection('userCarts').doc(userId);
      const doc = await userCartRef.get();
      if (doc.exists) {
        setCartItems(doc.data().cartItems || []);
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleEditProfile = () => {
    navigate('/edit-profile');
  };

  const handleEditAddress = () => {
    navigate('/edit-address');
  };

  const handleViewOwnedCourses = () => {
    navigate('/owned-courses', { state: { cartItems } });
  };

  return (
    <div className="user-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="user-card">
              <Card.Body>
                <div className="user-header">
                  <FaUserCircle className="user-icon" />
                  <h2 className="user-name">{user?.displayName || 'Example User'}</h2>
                  <Button variant="primary" onClick={handleEditProfile} className="edit-profile-btn">
                    <FaUserEdit /> Edit Profile
                  </Button>
                </div>
                <div className="user-info">
                  <div className="user-detail">
                    <FaEnvelope className="user-detail-icon" />
                    <span>{user?.email || 'example@email.com'}</span>
                  </div>
                  <div className="user-detail">
                    <FaMapMarkerAlt className="user-detail-icon" />
                    <span>{user?.address || 'Unknown'}</span>
                    <Button variant="link" onClick={handleEditAddress} className="edit-address-btn">
                      <FaEdit />
                    </Button>
                  </div>
                </div>
                <div className="user-actions">
                  <Button variant="primary" onClick={handleViewOwnedCourses} className="owned-courses-btn">
                    <FaBook /> View Owned Courses
                  </Button>
                  <Button variant="danger" onClick={handleLogout} className="logout-btn">
                    Logout
                  </Button>
                </div>
                <div className="visit-count">
                  <p>Visit Count: {visitCount}</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserPage;