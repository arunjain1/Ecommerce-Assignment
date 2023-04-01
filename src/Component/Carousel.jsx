import React, { useState,useEffect } from 'react';
import './Styling/Carousel.css';

function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(nextImage, 1000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const prevImage = () => {
    const newIndex = currentIndex === 0 ? props.images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextImage = () => {
    const newIndex = currentIndex === props.images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <button className="prev" onClick={prevImage}>
        ◀
      </button>
      <img src={props.images[currentIndex]} alt="carousel" />
      <button className="next" onClick={nextImage}>
        ▶
      </button>
    </div>
  );
}

export default Carousel;