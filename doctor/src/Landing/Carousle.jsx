import React, { useState } from 'react';
import CountUp from 'react-countup';
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
    <div className='carbody'>
      <div className='cbox1'>
        <div className='totalt'><h1 className='chead1'>" Good Health is the Foundation of<br/> a <u>Happy Life</u>"</h1></div>
        <div className='total'>
          <div className='total1'>
            <h2 >Total Patients</h2>
            <h1><CountUp start={1000} end={12678} duration={2} /></h1>
          </div>
          <div className='total2'>
            <h2 >Total Doctors</h2>
            <h1><CountUp start={10} end={124} duration={2} /></h1>
          </div>
          <div className='total3'>
            <h2>Total Staff</h2>
            <h1><CountUp start={10} end={678} duration={2} /></h1>
          </div>
        </div>
      </div>
      <div className='cbox2'>
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
      </div>  
    </div>
        
  );
};

export default Carousle;
