import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import CourseCategory from "./CourseCategory";
import { CartContext } from '../components/CartContext';
import Cart from './Cart';
import '../components/Styles/Courses.css'
import tumbel1 from './Assets/Unreal.png'
import tumbel2 from './Assets/programin.jpg'
import tumbel3 from './Assets/Blueprint.jpg'
import tumbel4 from './Assets/Mutiplayer.jpg'
import tumbel5 from './Assets/programin2.jpg'
import tumbel6 from './Assets/sddefault.jpg'
import tumbel7 from './Assets/Blender.jpg'
import tumbel8 from './Assets/BlenderFace.jpg'
import {firestore} from '../firebase.js'

function Courses() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const { addToCart } = useContext(CartContext);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowModal(false);
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleAddToCart = (course) => {
    addToCart(course); // Call the addToCart function here
    setCartItems([...cartItems, course]); // Update the local state
    setShowModal(false);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  useEffect(() => {
    const addCoursesToDatabase = async () => {
      try {
        const batch = firestore.batch();
        const courseData = [
          {
            id: 1,
            title: "Introduction To Unreal Engine 5",
            description: "This course help you explore Unreal Engine 5 (UE5) and its capabilities. Learn to craft immersive environments, master lighting, scripting, asset integration, and optimization for stunning results.",
            price: 20,
            category: "game-development",
            thumbnailUrl: tumbel1,
          },
          {
            id: 2,
            title: "C++ for Unreal Engine",
            description: "This course dive into C++ programming tailored for Unreal Engine game development. Learn core C++ concepts and Unreal's API to create immersive games efficiently.",
            price: 15,
            category: "game-development",
            thumbnailUrl: tumbel2,
          },
          {
            id: 3,
            title: "Unreal Engine Blueprint Essentials",
            description: "This course help you learn Unreal Engine's Blueprint system to create dynamic games without coding. Explore Blueprint basics, gameplay mechanics, UI design, AI behavior, and more for efficient game development.",
            price: 25,
            category: "game-development",
            thumbnailUrl: tumbel3,
          },
          {
            id: 4,
            title: "Unreal Engine 5 Mastery: Create Multiplayer Games with C++",
            description: "This course help you learn to build multiplayer games in Unreal Engine 4 using C++. This course covers networking essentials, game mechanics, optimization, UI, AI, testing, and advanced topics for creating immersive multiplayer experiences.",
            price: 30,
            category: "game-development",
            thumbnailUrl: tumbel4,
          },
          {
            id: 5,
            title: "C# Programming For Beginners",
            description: "This course is designed for individuals with little to no programming experience who want to learn C#, a versatile and widely used programming language. From basic syntax to fundamental programming concepts, you'll gain the skills needed to start writing your own C# programs.",
            price: 20,
            category: "programming",
            thumbnailUrl: tumbel5,
          },
          {
            id: 6,
            title: "Advanced C# Programming: Concepts And Techniques",
            description: "This course is tailored for intermediate to advanced C# developers looking to deepen their understanding and proficiency in the language. Explore advanced concepts, best practices, and powerful techniques to elevate your C# programming skills to the next level.",
            price: 25,
            category: "programming",
            thumbnailUrl: tumbel6,
          },
          {
            id: 7,
            title: "Blender Fundamentals: 3D Modeling And Animation",
            description: "This course help you master Blender's basics in 3D modeling and animation. Learn modeling techniques, character design, rigging, and animation principles to bring your creations to life.",
            price: 15,
            category: "design",
            thumbnailUrl: tumbel7,
          },
          {
            id: 8,
            title: "Blender Character Creator And Animation",
            description: "This course covers the process of creating and animating characters using Blender. From designing and modeling to rigging and animation, you'll learn the essentials to bring your characters to life.",
            price: 20,
            category: "design",
            thumbnailUrl: tumbel8,
          },
        ];
        for (const course of courseData) {
          const courseRef = firestore.collection('courses').doc(course.title);
          const snapshot = await courseRef.get();
          if (!snapshot.exists) {
            batch.set(courseRef, course);
          }
        }

        await batch.commit();
        console.log('Courses added to the database successfully!');
      } catch (error) {
        console.log('Error adding courses to the database: ', error);
      }
    };

    addCoursesToDatabase();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesSnapshot = await firestore.collection('courses').get();
        const courses = coursesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAllCourses(courses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, []);

    
  

  return (
    <div className="courses-page">
      <Container>
        <Row className="mb-4">
          <Col md={3}>
            <CourseCategory onCategorySelect={handleCategorySelect} />
          </Col>
          <Col md={9}>
            <h2 className="section-title">Available Courses</h2>
            {selectedCategory && (
              <Row>
                {allCourses
                  .filter((course) => course.category === selectedCategory)
                  .map((course) => (
                    <Col key={course.id} md={6} lg={4}>
                      <Card
                        className="course-card mb-4"
                        onClick={() => handleCourseSelect(course)}
                      >
                        <div className="course-card-image">
                          <Card.Img
                            variant="top"
                            src={course.thumbnailUrl}
                            alt={course.title}
                          />
                        </div>
                        <Card.Body>
                          <Card.Title>{course.title}</Card.Title>
                          <Card.Text className="course-description">
                            {course.description}
                          </Card.Text>
                          <div className="course-price-and-cart">
                            <Card.Text>Price: ${course.price}</Card.Text>
                            <Button
                              variant="primary"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleAddToCart(course);
                              }}
                            >
                              <FaShoppingCart /> Add to Cart
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
              </Row>
            )}
          </Col>
        </Row>
      </Container>

      {selectedCourse && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedCourse.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{selectedCourse.description}</p>
            <p>Price: ${selectedCourse.price}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => handleAddToCart(selectedCourse)}
            >
              <FaShoppingCart /> Add to Cart
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}

export default Courses;






     

 
    