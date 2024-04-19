import React from 'react';
import { Link } from 'react-router-dom';
import homeBackground from './Assets/home-background.jpg';
import image1 from './Assets/Pic1.jpg.webp';
import image2 from './Assets/Pic2.jpg.jpg';
import image3 from './Assets/Pic3.jpg.jpg';
import image4 from './Assets/Pic4.jpg.jpg';
import image5 from './Assets/Pic5.jpg.png';
import image6 from './Assets/Pic6.jpg.jpg';
import image7 from './Assets/Pic7.jpg.jpg'; 
import '../components/Styles/Home.css';


function Home() {
  return (
    <div className="home-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${homeBackground})`,
        }}
      ></div>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to UnrealForge</h1>
          <p>
            Unlock your gaming potential with our comprehensive courses. Explore Unreal Engine, master programming, and unleash your creativity to build immersive experiences.
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">
              Learn More
            </Link>
            <Link to="/courses" className="btn btn-secondary">
              See Courses
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={image1} alt="1" />
        </div>
      </div>
      <div className="gallery-section">
        <div className="gallery-item">
          <img src={image2} alt="2" />
          <div className="gallery-item-overlay">
            <h3>Game Development</h3>
            <p>Build your dream games with Unreal Engine.</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src={image3} alt="3" />
          <div className="gallery-item-overlay">
            <h3>3D Modeling</h3>
            <p>Bring your creative visions to life with Blender.</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src={image4} alt="4" />
          <div className="gallery-item-overlay">
            <h3>C++ Programming</h3>
            <p>Master the foundational language for game dev.</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src={image5} alt="5" />
          <div className="gallery-item-overlay">
            <h3>Blueprints</h3>
            <p>Unleash your creativity without coding.</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src={image6} alt="6" />
          <div className="gallery-item-overlay">
            <h3>Multiplayer Games</h3>
            <p>Build engaging, connected gaming experiences.</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src={image7} alt="7" />
          <div className="gallery-item-overlay">
            <h3>Advanced Techniques</h3>
            <p>Dive deeper into game development mastery.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;