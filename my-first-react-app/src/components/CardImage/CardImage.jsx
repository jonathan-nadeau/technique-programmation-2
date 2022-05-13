import './cardImage.css';
import React from 'react';

const CardImage = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

export default CardImage;
