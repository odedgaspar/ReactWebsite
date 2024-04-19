import React from "react";
import "./Styles/CourseCatgory.css";

function CourseCategories({ onCategorySelect }) {
  const handleClick = (category) => {
    onCategorySelect(category);
  };

  return (
    <div className="course-categories">
      <h2 className="category-title">Categories</h2>
      <ul className="category-list">
        <li className="category-item">
          <a
            href="#!"
            className="category-link"
            onClick={() => handleClick("programming")}
          >
            <i className="fas fa-code category-icon"></i>
            <span className="category-name">Programming</span>
          </a>
        </li>
        <li className="category-item">
          <a
            href="#!"
            className="category-link"
            onClick={() => handleClick("game-development")}
          >
            <i className="fas fa-gamepad category-icon"></i>
            <span className="category-name">Game Development</span>
          </a>
        </li>
        <li className="category-item">
          <a
            href="#!"
            className="category-link"
            onClick={() => handleClick("design")}
          >
            <i className="fas fa-pencil-ruler category-icon"></i>
            <span className="category-name">Design</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default CourseCategories;