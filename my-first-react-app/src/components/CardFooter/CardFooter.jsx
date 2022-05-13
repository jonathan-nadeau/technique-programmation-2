import './cardFooter.css';
import React from 'react';

const CardFooter = ({ src, name }) => {
  return (
    <div className='footer'>
      <img src={src} alt={name} />
      <span>
        Creation of <span className='name'>{name}</span>
      </span>
    </div>
  );
};

export default CardFooter;
