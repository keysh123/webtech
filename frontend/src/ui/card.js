import React, { useEffect, useRef, useState } from 'react';
import './card.css';

const Card = ({ id, image, description, isVisible, delay }) => {
  const [animated, setAnimated] = useState(false);
  const [visible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const topPosition = cardRef.current.getBoundingClientRect().top;
        const isVisible = topPosition < window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    handleScroll(); // Check if the card is initially visible

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [id]);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        setAnimated(true);
      }, delay);

      return () => {
        clearTimeout(timeout);
        setAnimated(false); // Reset the animation state when the card is not visible
      };
    }
  }, [isVisible, delay]);

  return (
    <div className={`card ${animated ? 'active' : ''}`} ref={cardRef} id={id}>
      <div className="card-image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="card-content">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;

