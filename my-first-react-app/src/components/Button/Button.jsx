import React from 'react';
import './button.css';

export const Button = ({ textField, onClick }) => {
  return <button onClick={onClick}>{textField}</button>;
};
