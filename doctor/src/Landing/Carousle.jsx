import React, { useState } from 'react';
import './Carousle.css'; // CSS for the carousel
import image1 from '../images/carousel-1.jpg';
import image2 from '../images/carousel-2.jpg';
import image3 from '../images/carousel-3.jpg';

const Carousle = () => {
    const images = [image1, image2, image3]; // Add your image paths here
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveSlide = (direction) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + direction + images.length) % images.length;
      return newIndex;
    });
  };

  return (

        <div className="carousel-container">
        <div className="carousel">
            <div className="carousel-item">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            </div>
        </div>
        <button className="prev-btn" onClick={() => moveSlide(-1)}>
            &#10094;
        </button>
        <button className="next-btn" onClick={() => moveSlide(1)}>
            &#10095;
        </button>
        </div>
  );
};

export default Carousle;
