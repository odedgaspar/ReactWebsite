import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLightbulb, FaHandsHelping, FaGraduationCap } from 'react-icons/fa';
import '../components/Styles/About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="about-title">Unlock Your Gaming Potential</h1>
              <p className="about-description">
                At Unreal Learn, we're devoted to empowering aspiring game developers with the knowledge and skills they need to bring their creative visions to life. Our comprehensive courses cover a wide range of topics, from mastering Unreal Engine to honing advanced programming and design techniques.
              </p>
            </Col>
            <Col md={6}>
              <div className="about-image">
                <img src="https://www.svgrepo.com/show/394536/unreal-engine.svg" alt="About Unreal Learn" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="about-content">
        <Container>
          <Row>
            <Col md={4}>
              <div className="about-feature">
                <div className="feature-icon">
                  <FaLightbulb />
                </div>
                <h3>Unreal Engine Expertise</h3>
                <p>
                  Our team of experienced instructors has deep expertise in Unreal Engine, and they are dedicated to sharing their knowledge with our students. Learn from the best and master the tools that power the industry's most captivating games.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="about-feature">
                <div className="feature-icon">
                  <FaHandsHelping />
                </div>
                <h3>Hands-on Learning</h3>
                <p>
                  Our courses are designed with a hands-on approach, allowing you to apply the concepts you learn immediately. Get practical experience building your own projects and gain the confidence to tackle any game development challenge.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="about-feature">
                <div className="feature-icon">
                  <FaGraduationCap />
                </div>
                <h3>Community Support</h3>
                <p>
                  Join our vibrant community of aspiring and experienced game developers. Collaborate with like-minded individuals, share your projects, and receive valuable feedback to accelerate your growth.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About;