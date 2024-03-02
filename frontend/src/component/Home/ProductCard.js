
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

const ProductCard = ({ product, delay }) => {


  const [animated, setAnimated] = useState(false);
  const [visible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  const options = {
    size: "large",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

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
  }, []);

  useEffect(() => {
    if (visible) {
      const timeout = setTimeout(() => {
        setAnimated(true);
      }, delay);

      return () => {
        clearTimeout(timeout);
        setAnimated(false); // Reset the animation state when the card is not visible
      };
    }
  }, [visible, delay]);

  return (
    <Link className={`productCard ${animated ? 'active' : ''}`} to={`/product/${product._id}`} ref={cardRef}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <ReactStars {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`₹${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;

